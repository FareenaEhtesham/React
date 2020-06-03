import React from 'react'
import './emoji.css'
import Details from './Emoji_Component/emoji_details'
import Card from './Emoji_Component/emoji_Card'


const mapping=(value) => {
    return (
      <Card
        key={value.id}
        emoji_pic={value.emoji}
        name={value.name}
        meaning={value.meaning}
      />
    );
  }
  
  const Emoji=() => {
    return (
      <div>
        <h1>
          <span>emojipedia</span>
        </h1>
        <dl className="dictionary">{Details.map(mapping)}</dl>
      </div>
    );
  }
  
export default Emoji