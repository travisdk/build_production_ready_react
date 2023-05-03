import { useContext } from "react";
import { Context } from "../context/FirestoreContext";
const Preview = () => {
  const { state } = useContext(Context);
  const { inputs } = state;

  return (
    inputs.path && (
      <div
        className="rounded p-1 m-5"
        style={{
          width: "30%",
          height: "300px",
          backgroundImage: `url(${inputs.path}`,
          backgroundSize: "cover",
        }}></div>
    )
  );
};
export default Preview;
