import { useState } from "react";

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
  const [inputs, setInputs] = useState({ title: null, file: null, path: null });
  const [items, setItems] = useState(photos);
  const [isCollapsed, collapse] = useState(false);

  const handleOnChange = (e) => {
    setInputs({ title: e.target.value, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0]) });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setItems([inputs.file, ...items]);
  };

  const toggle = () => {
    collapse(!isCollapsed);
  };

  return (
    <>
      <div className="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={toggle}>
          {isCollapsed ? "Close" : "Add"}
        </button>
        <div className="clearfix mb-4">
          <UploadForm isVisible={isCollapsed} onChange={handleOnChange} onSubmit={handleOnSubmit} />
        </div>
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
