import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem"
import Post from "./components/Post"
import "./style/App.css";


function App() {
 const [value, setValue] = useState("текст в инпуте");
 const [posts, setPosts] = useState([
  {id: 1, title: "JavaScript-1", body: "descripcion"},
  {id: 2, title: "JavaScript-2", body: "descripcion"},
  {id: 3, title: "JavaScript-3", body: "descripcion"},
 ])
 
  return (
    <div className="App">
      <h1>{value}</h1>
      <input 
        type = "text" 
        value = {value}
        onChange = {event => setValue(event.target.value)}
      />
      
      <Counter/>
      <ClassCounter/>

      <PostItem id={1} title="JavaScript" body="descripcion"/>
      <PostItem id={2} title="PHP" body="descripcion"/>
      <PostItem id={3} title="Python" body="descripcion"/>

      {posts.map(post => 
        <Post post={post} key={post.id}/>

      )}

      

    
      
    </div>
  );
};

export default App;
