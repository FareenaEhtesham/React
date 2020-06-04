import React from 'react'
import Header from './component/header'
import Footer from './component/footer'
import Note from './component/note'
import Note_Card from './component/note_Card'
import Card from './component/card'
import Contact from './component/contact'
import Avatar from './component/avatar'

const App =() =>{

// let mapping;

// mapping =(
//   <div>
//         {Contact.map (a =>{
//         return(
//           <Card 
//           key = {a.id}      
//           name ={a.name}
//           img ={a.img}
//           phno={a.phno}
//           email={a.email}/>
//         )

//         })}
// </div> 
// )
//     return(
//         <div>
//     <h1 className="heading">My Contacts</h1>
//     <Avatar image="https://media-exp1.licdn.com/dms/image/C5103AQHLO0kA5emSsw/profile-displayphoto-shrink_200_200/0?e=1596067200&v=beta&t=v2kr_Sq0Ya5yX4xUIm02NZyTlpLiILsrtohJWwTTCNA" />
    
//     {mapping}
    

//       </div>
//     )


       return(
         <div>

           <Header />
           
           {Note.map( value =>{

             return(
              <Note_Card
              key ={value.key}
              title={value.title}
              para = {value.content}
              
              />
             )
           }

           )}
           <Footer />
           
         </div>
       ) 
     
}
export default App
