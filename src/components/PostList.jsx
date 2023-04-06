import React from "react";
import Post from "./Post";
 
const PostList = ({posts, titleList, remove}) => {

    return ( 
        <div>
          <h1 style={{textAlign: "center", color: "teal", marginTop: "50px"}}>
            {titleList}
          </h1>
           {posts.map((post, index) => 
            <Post remove={remove} number={index + 1} post={post} key={post.id}/>
          )}
        </div>
    )
}

export default PostList;