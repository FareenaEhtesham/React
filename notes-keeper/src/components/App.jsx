import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [myNotes, setmyNotes] = useState([]);

  const Adding = note => {
    setmyNotes(previous => {
      return [...previous, note];
    });
  };

  const Delete = id => {
    setmyNotes(previous => {
      return previous.filter((item, index) => {
        return index !== id;
      });
    });
    console.log("bdsjbfjd");
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={Adding} />

      {myNotes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            Deleting={Delete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
