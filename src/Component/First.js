import React, { useState } from "react";
import "./First.css";
// import { Button, Input } from "antd";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

const Index = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const imageUpload = (e) => {
    const file = e.target.files[0];
    const saveImage = URL.createObjectURL(file);
    console.log(saveImage);
    setImage(saveImage);
  };
  const addStatement = () => {
    const file = {
      name,
    };
    console.log(file);
  };
  return (
    <div className="container">
      <div className="profile">
        <img className="display" src={image} />
        <input type="file" onChange={imageUpload} />
      </div>

      <div className="form">
        <input className="input" type="text" placeholder="Input Your Details" />
        <button className="add" onClick={addStatement}>
          Add
        </button>
      </div>

      <div className="container12">
        <div className='container1'><AiOutlineCaretLeft />

</div>
<div className='container1'>

<AiOutlineCaretRight /></div>
      </div>

      {/* */}
      {/*  */}
    </div>
  );
};

export default Index;
