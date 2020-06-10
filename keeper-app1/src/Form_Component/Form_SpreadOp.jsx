import React,{useState} from 'react'

const Spread =() =>{

    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
      });
    
      function handleChange(event) {
        const { name, value } = event.target;
        
        setContact ( previous =>{
            // console.log(previous) This give whole OBJECT inside useState
/*
Normally we use return() , return{} ,return[] for a single return,
for object return , and for array return respectively

*/
           return{
                ...previous,
                // event.target.name = value   (We can't write like this inside a function)
                [name] : value
           };

        })
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

export default Spread