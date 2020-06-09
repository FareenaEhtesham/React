import React, { useState } from "react";

const Time = () => {
  const date = new Date().toLocaleTimeString();
  const [value, timeChanger] = useState(date);

  const Changing = () => {
    const newTime = new Date().toLocaleTimeString();
    timeChanger(newTime);
  };

  return (
    <div className="container">
      <h1>{value}</h1>
      <button onClick={Changing}>Get Time</button>
    </div>
  );
};

export default Time;
