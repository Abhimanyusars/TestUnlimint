import './App.css';
import React from 'react';
import Child from './Child'
function App() {
  
  const [input, setInput] = React.useState("");
  const [res,setRes] = React.useState([]);
  const a = [];
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleClick = () => {
    const date = new Date();  
    const a = date.toString();
    const b = date.getTime();
    const temp = {a,input,b}
    res.push(temp);
    setInput("")
    console.log(res);
  }

  return (
    <div className="App">
      <h1>New timer</h1>
       <input type="number" value={input} onChange={handleChange}/>
       <br></br>
       <br></br>
       <button onClick={handleClick}>Add</button>
       {res.length > 0 && res.map((item) => { 
        return (
          <div>
           <Child item={item}/>
          </div>
        )
       })}
      
    </div>
  );
}

export default App;
