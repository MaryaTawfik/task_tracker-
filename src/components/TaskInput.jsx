import React, { useState } from 'react'
import { useTasks } from '../store/taskContext'

export default function TaskInput() {
  const [value, setValue] = useState('')
  const { addTask } = useTasks()

  const submit = (e) => {
    e.preventDefault()
    if (!value.trim()) return
    addTask(value)
    setValue('')
  }

  return (
    <form className="task-input" onSubmit={submit}>
      <input
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a task"
        aria-label="Task"
      />
      <button className="btn" type="submit">Add Task</button>
    </form>
  )
}
