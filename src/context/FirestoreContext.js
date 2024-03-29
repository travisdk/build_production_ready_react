import { createContext, useContext, useMemo, useReducer, useCallback } from "react";
import Firestore from "../handlers/firestore";

const { readDocs } = Firestore;

const Context = createContext();

const photos = [];
const initialState = {
  items: photos,
  placeholders: photos,
  count: photos.length,
  inputs: { title: null, file: null, path: null },
  isCollapsed: false,
};

const handleOnChange = (state, e) => {
  if (e.target.name === "file") {
    return { ...state.inputs, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0]) };
  } else {
    return { ...state.inputs, title: e.target.value };
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setItem":
      return {
        ...state,
        items: [...state.items, state.inputs],
        placeholders: [...state.items, state.inputs],
        count: state.items.count + 1,
        inputs: { title: null, file: null, path: null },
      };

    case "filterItems":
      return {
        ...state,
        items: action.payload.results,
      };
    case "setItems":
      return {
        ...state,
        items: action.payload.items,
        placeholders: action.payload.items,
      };
    case "setInputs":
      return {
        ...state,
        inputs: handleOnChange(state, action.payload.value), // eksterne version af handleOnChange !!! action.payload.value = event
      };

    case "collapse":
      return {
        ...state,
        isCollapsed: action.payload.bool,
      };

    default:
      return state;
  }
};
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // async readDocs
  const read = useCallback(async () => {
    const items = await readDocs("stocks");
    dispatch({ type: "setItems", payload: { items } });
  }, []);

  const filterItems = useCallback(
    (input) => {
      if (input === "" || input === null) {
        dispatch({ type: "setItems", payload: { items: state.placeholders } });
      }
      let list = state.placeholders.flat();
      let results = list.filter((item) => {
        const name = item.title.toLowerCase();
        const searchInput = input.toLowerCase();
        return name.indexOf(searchInput) > -1;
      });
      dispatch({ type: "filterItems", payload: { results } });
    },
    [state]
  );

  const value = useMemo(() => {
    return {
      state,
      dispatch,
      filterItems,
      read,
    };
  }, [state, dispatch, filterItems, read]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useFirestoreContext = () => {
  return useContext(Context);
};

export default Provider;
