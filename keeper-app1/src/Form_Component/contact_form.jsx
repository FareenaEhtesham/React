import React, { useState } from "react";

function Contact() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(previous_val => {
      if (name === "fName") {
        return {
          fName: value,
          lName: previous_val.lName,
          email: previous_val.email
        };
      } else if (name === "lName") {
        return {
          fName: previous_val.fName,
          lName: value,
          email: previous_val.email
        };
      } else {
        return {
          fName: previous_val.fName,
          lName: previous_val.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
