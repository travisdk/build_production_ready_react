import { useMemo, useEffect } from "react";
import { useFirestoreContext } from "./context/FirestoreContext";

import { useAuthContext } from "./context/AuthContext";

// COMPONENTS
import List from "./components/List";
// CSS
import "./App.css";
function App() {
  const { authenticate } = useAuthContext();
  const { state, read } = useFirestoreContext();
  const count = useMemo(() => `you have ${state.items.length} image${state.items.length > 1 ? "s" : ""}`, [state.items]);

  useEffect(() => {
    authenticate();
    read();
  }, []);

  return (
    <>
      <h1>Gallery </h1>
      {count}
      <List items={state.items} filter={state.nameFilter} />
    </>
  );
}
export default App;
