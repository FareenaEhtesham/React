import React from 'react'

const EmojiCard=(props) =>{

    return(
        <div>
        <div>
               
                <dl className="dictionary">
                    <div className="term">
                    <dt>
                        <span className="emoji" role="img" aria-label="Tense Biceps">
                        {props.emoji_pic}
                        </span>
                        <span>{props.name}</span>
                    </dt>
                    <dd>
                        {props.meaning}
                    </dd>
                    </div>      
                </dl>
</div>
</div>
    )

}


export default EmojiCard