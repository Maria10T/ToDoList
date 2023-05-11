import React,{useState, useEffect} from "react";
import Header from "./Header"
import Form from "./Form"
import TodoList from "./TodoList"
import Footer from "./Footer";
const Home = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || []
  const [input, setInput]= useState("")
  const[todos, setTodos]=useState(initialState)
  const [editTodo, setEditTodo]=useState(null)
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <>
        <div>
          <Header/>
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        </div>
        <div >
          <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
        <div>
          <Footer/>
        </div>
      
    </>
  );
};

export default Home;