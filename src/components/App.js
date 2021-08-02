import react , {useState} from "react";
import './App.css';
import { Greet } from "./Greet";
function App() {
 const  [count , setState] = useState(5)

 
 
  function decrement (){
       setState (previousCount =>previousCount- 2 )

  }
  function imcrement (){
    setState (increCount =>increCount+3 )

}

  return (
    <div className="App">
      <header className="App-header">
       <button  onClick={imcrement}>+</button>
       <span>{count}</span>
       <button onClick={decrement}>-</button>
      </header>
   
      
    </div>
  );


  
}

export default App;
