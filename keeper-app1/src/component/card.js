import React from 'react'
import Avatar from './avatar'

const Card = props =>{

    return(
      <div className="card">
        <div className="top">
            <h2 className="name">{props.name}</h2>
            <Avatar image={props.img}/>
          </div>

          <div className="bottom">
            <p className="info">{props.phno}</p>
            <p className="info">{props.email}</p>
          </div>
  
      </div>
    )
  }

  
export default Card  