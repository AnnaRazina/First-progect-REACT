import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem"
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import "./style/App.css";


function App() {
 const [value, setValue] = useState("текст в инпуте");
 const [posts, setPosts] = useState([
  {id: 1, title: "JavaScript-1", body: "descripcion"},
  {id: 2, title: "JavaScript-2", body: "descripcion"},
  {id: 3, title: "JavaScript-3", body: "descripcion"},
 ])
 const createPost = (newPost) =>{
  setPosts([...posts, newPost]);
 }
 //принимает post из дочернего элемента
 const removePost = (post) => {
  setPosts(posts.filter(item => item.id !== post.id))
 }


 const [posts2, setPosts2] = useState([
  {id: 1, title: "Python-1", body: "descripcion"},
  {id: 2, title: "Python-2", body: "descripcion"},
  {id: 3, title: "Python-3", body: "descripcion"},
 ])
 const createPost2 = (newPost) =>{
  setPosts2([...posts2, newPost]);
 }
//принимает post из дочернего элемента
const removePost2 = (post) => {
  setPosts2(posts2.filter(item => item.id !== post.id))
 }

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

      <PostList remove={removePost} posts={posts} titleList="Посты про JavaScript"/>
      <AddPost create={createPost}/>

      <PostList remove={removePost2} posts={posts2} titleList="Посты про Python"/>
      <AddPost create={createPost2}/>

    </div>
  );
};

export default App;
