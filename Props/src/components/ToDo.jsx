import React, { useState } from 'react'

function ToDo() {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])

    const addTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), text: task, completed: false }])
            setTask('')
        }
    }

    const toggleComplete = () => {
        setTask(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        )
    }


    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    return (
        <div>
            <div className='d-flex'>
                <h1>To Do list</h1>
                <input
                    type='text'
                    style={{ padding: '8px 15px', borderRadius: '5px' }}
                    placeholder='Enter task'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button
                    style={{
                        padding: '8px 15px',
                        borderRadius: '5px',
                        backgroundColor: 'Highlight',
                        marginLeft: '10px'
                    }}
                    onClick={addTask}
                >Add ToDo</button>
            </div>
            <div className='d-flex'>
                <div>

                    {tasks.length === 0 ? (
                        <p>No task is available. Add some!</p>
                    ) : (
                        tasks.map((task) => (
                            <div key={task.id}>
                                <span
                                    className={task.completed ? 'completed' : ''}
                                    onClick={() => toggleComplete(task.id)}>
                                    {task.text}
                                </span>
                                <button className='btn' style={{ backgroundColor: 'red' }} onClick={() => deleteTask(task.id)}> Delete</button>
                            </div>

                        ))
                    )}

                </div>
            </div>
        </div>
    )
}

export default ToDo
