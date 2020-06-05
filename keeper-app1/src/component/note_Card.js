import React from "react";

const Note_Card= props => {
  return (
    <div className="note">

      <h1>{props.title}</h1>
      <p>{props.para}</p>

    </div>
  );
}

export default Note_Card;
