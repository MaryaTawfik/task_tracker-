import React from 'react'
import { useTasks } from '../store/taskContext'

export default function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useTasks()

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <span className="task-text">{task.text}</span>
      </label>
      <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  )
}
