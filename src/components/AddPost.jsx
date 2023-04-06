import React from "react";
import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const AddPost = ({create}) => {
  {/**Один useState для нескольких input**/}
  const [post, setPost] = useState({title: "", body: ""});
  
  function AddNewPost (event) {
    event.preventDefault();
    if(post.title == "" || post.body == "") {
        return
    }
    const newPost = {
        ...post,
        id: Date.now(),
    };
    create(newPost);
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