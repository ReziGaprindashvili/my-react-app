import './App.css';
import UsersList from "./components/UsersList";
import { Component, useRef } from "react";
import useLocalStorage from './hooks/useLocalStorage';
import useClickboard from './hooks/useClickboard.jsx';
import usePageBottom from './hooks/usePageBottom.jsx';
import useWindowResize from './hooks/useWindowResize.jsx';
import useDetectDevice from './hooks/useDetectDevice.jsx';
// import TodoList from "./components/TodoList";


function App() {
  const [isOpen, toggle] = useLocalStorage('tab', true)
  const {copy, makeCopy} = useClickboard()
  const inputRef = useRef()
  const bottom = usePageBottom()
  const device = useDetectDevice()
  
  

  return (
    <div>
      
      {device && <h1>{device}</h1>}
      
      <button onClick={() => toggle((prevState) => !prevState)}>Toggle Visibility</button>
      {isOpen && <h1>Hello</h1>}
      
      <br />
      <br />
      
      <div>
        <input type="text" ref={inputRef}/>
        <button onClick={() => makeCopy(inputRef.current.value)}>Copy</button>
        {copy && <p>Copied to clickboard</p>}
      </div>
      
      <div style={{height: '3000px'}}></div>
      {/* <UsersList/> */}
    </div>
  )
}

export default App
