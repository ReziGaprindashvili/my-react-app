import React from 'react'
import { useCallback, useState } from "react"

const TodoItem = React.memo(({task, onDelete, onDone, id}) => {
    return (
        <li>
            {task}
            <button onClick={() => onDelete(id)}>Delete</button>
            <button onClick={() => onDone(id)}>Done</button>
        </li>
    )
})

const doneTask = React.memo(({task, onDelete, onReset, id}) => {
    return (
        <li>
            {task}
            <button onClick={() => onDelete(id)}>Delete</button>
            <button onClick={() => onReset(id)}>Reset</button>
        </li>
    )
})

const funcTodo = () => {
    const [tasks, setTasks] = useState([])
    const [currentTask, setCurrenTask] = useState('')
    const [doneTasks, setDoneTasks] = useState([])

    const handleChange = useCallback((event) => {
        setCurrenTask(event.target.value)
    }, [])

    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        const task = [...tasks, currentTask]
        setTasks(task)
        setCurrenTask('')
    }, [currentTask, tasks])

    const handleDelete = useCallback((id) => {
        const updatedTasks = tasks.filter((_, index) => index != id)
        setTasks(updatedTasks)
    }, [tasks])

    const handleDone = useCallback((task) => {
        setTasks((tasks) => tasks.filter((t) => t != task))
        setDoneTasks((dones) => [...dones, task])
    }, [])

    const handleDoneDelete = useCallback((id) => {
        const updatedTasks = doneTasks.filter((_, index) => index !== id)
        setDoneTasks(updatedTasks)
    }, [doneTasks])

    const handleReset = useCallback((id) => {
        const resetTask = doneTasks[id]
        const updatedTasks = [...tasks, resetTask]
        const updatedDoneTasks = doneTasks.filter((_, index) => index !== id)
        setTasks(updatedTasks)
        setDoneTasks(updatedDoneTasks)
    }, [doneTasks, tasks])

    return (
        <div>
            <h1>Todo</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text" 
                    placeholder="enter a task"
                    onChange={handleChange}
                    value={currentTask}
                />
                <button type="submit">Add Task</button>
            </form>

            <ul>
                {tasks.map((task, index) => {
                    <TodoItem
                    key={index}
                    id={index}
                    task={task}
                    onDelete={handleDelete}
                    onDone={handleDone}
                    />
                })}
            </ul>
        </div>
    )
}
export default TodoList