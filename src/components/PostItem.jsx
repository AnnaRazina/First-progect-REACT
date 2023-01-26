import React from "react";

const postItem = (props) => {
    console.log (props);
  
   
    return ( 
        <div className="post">
            <div className="post__content">
                <strong>1. {props.title}</strong>
                <p>JavaScript - это язык программирования.</p>
            </div>
            <div className="post__btn">
                <button>DELETE</button>
            </div>
        </div>
    )
}

export default postItem;