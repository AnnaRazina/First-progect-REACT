import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem"
import "./style/App.css";


function App() {
 const [value, setValue] = useState("текст в инпуте");
 
 
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

    
      
    </div>
  );
};

export default App;
