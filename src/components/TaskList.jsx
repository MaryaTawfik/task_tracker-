import React from 'react'
import { useTasks } from '../store/taskContext'
import TaskItem from './TaskItem'

export default function TaskList() {
  const { tasks } = useTasks()

  if (!tasks.length) return <p className="empty">No tasks yet.</p>

  return (
    <ul className="task-list">
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} />
      ))}
    </ul>
  )
}
