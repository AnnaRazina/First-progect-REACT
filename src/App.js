import React, {useState} from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/ClassCounter";

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
      
    </div>
  );
}

export default App;
