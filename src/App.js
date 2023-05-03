import { useMemo, useContext, useEffect } from "react";
import FirebaseAuth from "./handlers/auth";
// TEMP
import Firestore from "./handlers/firestore";

// COMPONENTS
import Card from "./components/Card";

// CSS
import "./App.css";
import Layout from "./components/Layout";
import { Context } from "./context/FirestoreContext";
function App() {
  const { state, read } = useContext(Context);
  const count = useMemo(() => `you have ${state.items.length} image${state.items.length > 1 ? "s" : ""}`, [state.items]);

  useEffect(() => {
    read();
  }, []);

  return (
    <>
      <Layout>
        <h1>Gallery</h1>
        {count}
        <div className="row">
          {state.items.map((item, index) => {
            return <Card key={index} {...item} />;
          })}
        </div>
      </Layout>
    </>
  );
}
export default App;
