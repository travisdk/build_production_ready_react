import { useMemo, useContext } from "react";
import { Context } from "../context";
import Preview from "./Preview";

const UploadForm = () => {
  const { state, dispatch } = useContext(Context);
  const isDisabled = useMemo(() => !!Object.values(state.inputs).some((input) => !input), [state.inputs]);
  const handleOnChange = (e) => {
    dispatch({ type: "setInputs", payload: { value: e } });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "setItem" });
    dispatch({ type: "collapse", payload: { bool: false } });
  };
  return (
    state.isCollapsed && (
      <>
        <p className="display-6 text-center mb-3">Upload Stock Image</p>

        <div className="mb-5 d-flex align-items-center justify-content-center">
          <Preview />
          <form className="mb-2" style={{ textAlign: "left" }} onSubmit={handleOnSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="title"
                aria-describedby="text"
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-3">
              <input type="file" className="form-control" name="file" onChange={handleOnChange} />
            </div>
            <button disabled={isDisabled} type="submit" className="btn btn-success float-end">
              Save changes
            </button>
          </form>
        </div>
      </>
    )
  );
};

export default UploadForm;
