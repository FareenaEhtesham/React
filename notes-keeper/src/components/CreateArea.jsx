import React, { useState } from "react";

function CreateArea(props) {
  const [note, handlenote] = useState({
    title: "",
    content: " "
  });
  const Changer = event => {
    const { name, value } = event.target;

    handlenote(whole => {
      return {
        ...whole,
        [name]: value
      };
    });
  };

  const Submission = event => {
    props.onAdd(note);
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={Changer}
        />

        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={Changer}
        />

        <button onClick={Submission}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
