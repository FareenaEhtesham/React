import React from "react";

function Note(props) {
  const Deletion = () => {
    props.Deleting(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={Deletion}>DELETE</button>
    </div>
  );
}

export default Note;
