import "./loading.css"
import React from "react"

function Loading({ text }) {
  return (
    <div className="loading flex-column">
      <div className="loader"></div>
      <p>{text}</p>
    </div>
  );
}

export default Loading;