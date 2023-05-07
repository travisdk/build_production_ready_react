import List from "./List";
import { useFirestoreContext } from "../context/FirestoreContext";
import { useMemo } from "react";
import { useAuthContext } from "../context/AuthContext";

const StockImages = () => {
  const { state } = useFirestoreContext();
  const { currentUser } = useAuthContext();
  const username = currentUser?.displayName?.toLowerCase().split(" ").join("");

  const items = useMemo(() => {
    const filtered = state.items.filter((item) => {
      return item.user === username;
    });
    return currentUser ? filtered : [];
  }, [currentUser, state, username]);
  return (
    <>
      <h1> My Stock Images</h1>
      <List items={items} filter={state.nameFilter} />
    </>
  );
};

export default StockImages;
