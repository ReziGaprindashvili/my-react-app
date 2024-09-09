
import { useCallback, useEffect, useRef, useState } from "react";
import UserItem from "./UserItem";

const UsersList = () => {

  const [inputValue, setInputValue] = useState('')
  const [users, setUsers] = useState([{id: 1, name: 'Rezi'}, {id: 2, name: 'Revaza'}])

  const inputRef = useRef(null)

  useEffect(() => {
    console.log(users[users.length - 1])
  }, [users])

  // useEffect(() => {
  //   customFocus()
  // }, [])
    
  const onChange = (event) => {
    const value = event.target.value
    setInputValue(value)
  }

  const addUser = (event) => {
    event.preventDefault()

    const user = {
      id: users.length + 1,
      name: inputValue
    }
    setUsers((prevState) => [...prevState, user])
    setInputValue('')
  }

  const removeUser = useCallback((id) => {
    setUsers((prevState) => prevState.filter((user) => user.id !== id)  )
  }, [])

  // const customFocus = () => {
  //   inputRef.current.focus()
  // }

  return (
      
    <div className = "users">
      
      <form onSubmit={addUser} className = "user-form">
        <input ref={inputRef } type="text" onChange={onChange} value={inputValue}/>
        <button>Add User</button>
      </form>

      {/* <button onClick={customFocus}>Focus the Input</button> */}

      {users.map((user) => (
        <UserItem key={user.id} id={user.id} name={user.name} action={removeUser}/>
      ))}

    </div>
      )
    
}

export default UsersList