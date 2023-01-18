import React, {useState} from "react";

function App() {
 const [likes, setLikes] = useState(0);
 
 function Increment () {
  setLikes(likes + 1)
 };
 function Decrement () {
  setLikes(likes - 1)
 };
  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}

export default App;
