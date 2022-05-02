import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactQuill from 'react-quill';

import  "react-quill/dist/quill.snow.css";
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

const  modules  = {
  toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script:  "sub" }, { script:  "super" }],
      ["blockquote", "code-block"],
      [{ list:  "ordered" }, { list:  "bullet" }],
      [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
  ],
};
export default () => {
  const [savedText, setSavedText] = useState("<h1>hello</h1>");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(savedText)
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div  className="container">  
      <ReactQuill  modules={modules} theme="snow" value={savedText} onChange={(html)=>setSavedText(html)}  />
      </div>
      <input type='submit' name="submit" value="Commit" className="btn btn-primary" />
    </form>
  );
};
