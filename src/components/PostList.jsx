import React from "react";
import { useState } from "react";
import Post from "./Post";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
 

const PostList = ({posts, title}) => {


  const [titleInput, setTitleInput] = useState("")

  function AddNewPost (event) {
    event.preventDefault();
    console.log(titleInput)

  }

    return ( 
        <div>
          <h1 style={{textAlign: "center", color: "teal", marginTop: "50px"}}>
            {title}
          </h1>
          {posts.map(post => 
            <Post post={post} key={post.id}/>
          )}

          <form>
            {/*Управляемый компонент*/}
            <MyInput 
              value = {titleInput}
              onChange = {event => setTitleInput(event.target.value)}
              type="text" 
              placeholder="Название поста"
            />
            <MyInput
              type="text"
              placeholder="Описание поста"
            />
            <MyButton onClick={AddNewPost}>Создать пост</MyButton>
          </form>

        </div>
    )
}

export default PostList;