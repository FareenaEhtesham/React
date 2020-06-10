import React, { useState } from "react";
import Form from "./form";
import Contact from "./contact_form";
import Spread from './Form_SpreadOp'

function React_Form() {
  const [myname, setname] = useState();
  const [heading, setheading] = useState();

  const handling = event => {
    console.log(event.target.value);
    setname(event.target.value);
  };

  const submission = e => {
    setheading(myname);
    e.preventDefault();
  };
  return (
    <div className="container">
      <form onSubmit={submission}>
        <h1>Hello {heading}</h1>
        <input
          type="text"
          onChange={handling}
          placeholder="What's your name?"
          value={myname}
        />
        <button type="submit">Submit</button>
      </form>
   
      <Form />
      <Contact />
    </div>
  );
}

export default React_Form;
