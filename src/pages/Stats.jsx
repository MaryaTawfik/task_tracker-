import React from 'react'
import Header from '../components/Header'
import { useTasks } from '../store/taskContext'

export default function Stats() {
  const { tasks } = useTasks()
  const total = tasks.length
  const completed = tasks.filter((t) => t.completed).length
  const remaining = total - completed

  return (
    <div className="page">
      <Header />
      <section className="stats">
        <div className="stat">Total tasks: <strong>{total}</strong></div>
        <div className="stat">Completed: <strong>{completed}</strong></div>
        <div className="stat">Remaining: <strong>{remaining}</strong></div>
      </section>
    </div>
  )
}
