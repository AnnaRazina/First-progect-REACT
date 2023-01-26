import React from "react";

const postItem = () => {
    return ( 
        <div className="post">
            <div className="post__content">
                <strong>1. JavaScript</strong>
                <p>JavaScript - это язык программирования.</p>
            </div>
            <div className="post__btn">
                <button>DELETE</button>
            </div>
        </div>
    )
}

export default postItem;