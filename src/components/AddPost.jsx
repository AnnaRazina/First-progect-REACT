import React from "react";
import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const AddPost = () => {
  {/**Один useState для нескольких input**/}
  const [post, setPost] = useState({title: "", body: ""});
  
  function AddNewPost (event) {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      post,
    };
    console.log(newPost);
    setPost({title: "", body: ""});
  };
  return (
    <div>
        <form>
            {/**Управляемый компонент**/}
            <MyInput 
              value = {post.title}
              onChange = {event => setPost({...post, title: event.target.value})}
              type="text" 
              placeholder="Название поста"
            />
            {/**Управляемый компонент2**/}
            <MyInput
              value = {post.body}
              onChange = {event => setPost({...post, body: event.target.value})}
              type="text"
              placeholder="Описание поста"
            />
            <MyButton onClick={AddNewPost}>Создать пост</MyButton>
        </form> 

    </div>
  )
}

export default AddPost;