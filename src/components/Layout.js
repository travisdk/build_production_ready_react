import { useContext } from "react";
import { Context } from "../context";
import Navbar from "./Navbar";
import UploadForm from "./UploadForm";

const Layout = ({ children }) => {
  const { state, dispatch } = useContext(Context);
  const toggle = (bool) => {
    dispatch({ type: "collapse", payload: { bool: !state.isCollapsed } });
  };
  return (
    <>
      <Navbar />

      <div className="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={() => toggle(!state.isCollapsed)}>
          {state.isCollapsed ? "Close" : "Add"}
        </button>
        <div className="clearfix mb-4">
          <UploadForm />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};
export default Layout;
