import React from "react";

const PostItem = (props) => {

    return ( 
        <div className="post">
            <div className="post__content">
                <strong>{props.id}. {props.title} </strong>
                <p>{props.body}- это язык программирования.</p>
            </div>
            <div className="post__btn">
                <button>DELETE</button>
            </div>
        </div>
    )
}

export default PostItem;