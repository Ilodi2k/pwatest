import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  const [textInput, setTextInput] = useState()

  const [todos, setTodos] = useState([""]);

  const handleSubmitTodo = (textInput, todos) => {
    if (todos === [""]) {
      setTodos(textInput)
    }

    if (textInput =! "") {
      const updatedTodos = [...todos, textInput] 
      setTodos(updatedTodos)
    }
  }

  const handleTextInput = (e) => {
    setTextInput(e.value)
  }

  const handleDeleteTodo = () => {
    console.log("delete")
  }

  return (
    <div className="App">
      <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
        {todos.map((todo) => (
          <div style={{display: "flex", gap:"20px"}}>
            <div>{todo}</div>
            <button onClick={handleDeleteTodo}>❌</button>
          </div> 
        ))}
      </div>
      <br></br>
      <div style={{display: "flex", justifyContent:"center"}}>
        <div >
        <input onChange={(e) => handleTextInput}></input>
        </div>
        <div>
          <button onClick={handleSubmitTodo}>➕</button>
        </div>
      </div>
    </div>
  );
}

export default App;
