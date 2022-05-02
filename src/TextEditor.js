import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactQuill from 'react-quill';// or const { useQuill } = require('react-quilljs');

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



/*  useEffect(() => {
    const s = io("http://localhost:3001")
    setSocket(s)

    return () => {
      s.disconnect()
    }
  }, [])

  useEffect(() => {
    if (socket == null || quill == null) return

    socket.once("load-document", document => {
      quill.setContents(document)
      quill.enable()
    })

    socket.emit("get-document", documentId)
  }, [socket, quill, documentId])

  useEffect(() => {
    if (socket == null || quill == null) return

    const interval = setInterval(() => {
      socket.emit("save-document", quill.getContents())
    }, SAVE_INTERVAL_MS)

    return () => {
      clearInterval(interval)
    }
  }, [socket, quill])

  useEffect(() => {
    if (socket == null || quill == null) return

    const handler = delta => {
      quill.updateContents(delta)
    }
    socket.on("receive-changes", handler)

    return () => {
      socket.off("receive-changes", handler)
    }
  }, [socket, quill])

  useEffect(() => {
    if (socket == null || quill == null) return

    const handler = (delta, oldDelta, source) => {
      if (source !== "user") return
      socket.emit("send-changes", delta)
    }
    quill.on("text-change", handler)

    return () => {
      quill.off("text-change", handler)
    }
  }, [socket, quill])
*/