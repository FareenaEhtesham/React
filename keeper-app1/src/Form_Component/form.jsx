import React, { useState } from "react";

function Form() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setFullName(previous => {
      if (name === "first") {
        return {
          fName: value,
          lName: previous.lName
        };
      } else if (name === "lName") {
        return {
          fName: previous.fName,
          lName: value
        };
      }
    });
  };

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input name="first" onChange={handleChange} placeholder="First Name" />
        <input name="lName" onChange={handleChange} placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
