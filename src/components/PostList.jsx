import React from "react";
import Post from "./Post";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
 

const PostList = ({posts, title}) => {

    return ( 
        <div>
          <h1 style={{textAlign: "center", color: "teal", marginTop: "50px"}}>
            {title}
          </h1>
          {posts.map(post => 
            <Post post={post} key={post.id}/>
          )}

          <form>
            <MyInput type="text" placeholder="Название поста"/>
            <MyInput type="text" placeholder="Описание поста"/>
            <MyButton>Создать пост</MyButton>
          </form>

        </div>
    )
}

export default PostList;