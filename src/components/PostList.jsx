import React from "react";
import Post from "./Post";
import MyButton from "./UI/button/MyButton";
const PostList = ({posts, title}) => {

    return ( 
        <div>
          <h1 style={{textAlign: "center", color: "blue", marginTop: "50px"}}>
            {title}
          </h1>
          {posts.map(post => 
            <Post post={post} key={post.id}/>
          )}

          <form>
            <input type="text" placeholder="Название поста"/>
            <input type="text" placeholder="Описание поста"/>
            <MyButton>Создать пост</MyButton>
          </form>

        </div>
    )
}

export default PostList;