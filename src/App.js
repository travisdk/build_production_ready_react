import { useState, useEffect } from "react";

// COMPONENTS
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import UploadForm from "./components/UploadForm";

// CSS
import "./App.css";

// TEST DATA
const photos = [
  "https://picsum.photos/id/1001/200/200",
  "https://picsum.photos/id/1002/200/200",
  "https://picsum.photos/id/1003/200/200",
  "https://picsum.photos/id/1004/200/200",
  "https://picsum.photos/id/1005/200/200",
  "https://picsum.photos/id/1006/200/200",
];

function App() {
  const [count, setCount] = useState(0);
  const [inputs, setInputs] = useState({ title: null, file: null, path: null });
  const [items, setItems] = useState(photos);
  const [isCollapsed, collapse] = useState(false);

  const handleOnChange = (e) => {
    if (e.target.name === "file") {
      setInputs({ ...inputs, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0]) });
    } else {
      setInputs({ ...inputs, title: e.target.value });
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setItems([inputs.path, ...items]);
    setInputs({ title: null, file: null, path: null });
    collapse(false);
  };

  const toggle = () => {
    collapse(!isCollapsed);
  };

  useEffect(() => {
    setCount(`you have ${items.length} image${items.length > 1 ? "s" : ""}`);
  }, [items]);

  return (
    <>
      <div className="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={toggle}>
          {isCollapsed ? "Close" : "Add"}
        </button>
        <div className="clearfix mb-4">
          <UploadForm isVisible={isCollapsed} onChange={handleOnChange} onSubmit={handleOnSubmit} inputs={inputs} />
        </div>
        {count}
        <h1>Gallery</h1>

        <Navbar />

        <div className="row">
          {items.map((photo, index) => {
            return <Card key={index} src={photo} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
