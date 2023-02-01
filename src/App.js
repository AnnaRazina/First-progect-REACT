import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem"
import PostList from "./components/PostList";
import "./style/App.css";


function App() {
 const [value, setValue] = useState("текст в инпуте");
 const [posts, setPosts] = useState([
  {id: 1, title: "JavaScript-1", body: "descripcion"},
  {id: 2, title: "JavaScript-2", body: "descripcion"},
  {id: 3, title: "JavaScript-3", body: "descripcion"},
 ])
 const [posts2, setPosts2] = useState([
  {id: 1, title: "Python-1", body: "descripcion"},
  {id: 2, title: "Python-2", body: "descripcion"},
  {id: 3, title: "Python-3", body: "descripcion"},
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

      <PostList posts={posts} title="Посты про JavaScript"/>
      <PostList posts={posts2} title="Посты про Python"/>

      
    </div>
  );
};

export default App;
