import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useFirestoreContext } from "../context/FirestoreContext";
import Card from "./Card";

const Single = () => {
  const navigate = useNavigate();
  const { state: routerState } = useLocation();
  const { state } = useFirestoreContext();
  const item = state.items.find((item) => item.id === routerState.id);

  return (
    <>
      <button
        className="btn btn-link"
        onClick={() => {
          navigate(-1);
        }}>
        Back
      </button>
      <div className="d-flex justify-content-center mb-5">
        <Card className="w-100" {...item} />
      </div>
    </>
  );
};
export default Single;
