import Firestore from "./../handlers/firestore";
import { useMemo, useContext } from "react";
import { Context } from "../context";
import Preview from "./Preview";
import Storage from "../handlers/storage";

const { writeDoc } = Firestore;
const { uploadFile, downloadFile } = Storage;

const UploadForm = () => {
  const { state, dispatch } = useContext(Context);
  const { isCollapsed: isVisible, inputs } = state;
  const isDisabled = useMemo(() => !!Object.values(inputs).some((input) => !input), [inputs]);
  const handleOnChange = (e) => {
    dispatch({ type: "setInputs", payload: { value: e } });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    uploadFile(inputs)
      .then(downloadFile)
      .then((url) => {
        writeDoc({ ...inputs, path: url }, "stocks").then(() => {
          dispatch({ type: "setItem" });
          dispatch({ type: "collapse", payload: { bool: false } });
        });
      });
  };

  return (
    isVisible && (
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
              Save and upload
            </button>
          </form>
        </div>
      </>
    )
  );
};

export default UploadForm;
