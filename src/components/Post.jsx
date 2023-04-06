import React from "react";
import MyButton from "./UI/button/MyButton";

const Post = (props) => {
    return ( 
        <div className="post">
            <h1>Props - списком, с указанием ключа.</h1>
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title} </strong>
                <p>{props.post.body}- это язык программирования.</p>
            </div>
            <div className="post__btn">
                <MyButton onClick={() => props.remove(props.post)}>
                    DELETE
                </MyButton>
            </div>
        </div>
    )
}

export default Post;