import React from 'react'
import Header from '../components/Header'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'

export default function Home() {
  return (
    <div className="page">
      <Header />
      <section className="controls">
        <TaskInput />
      </section>
      <section className="list">
        <TaskList />
      </section>
    </div>
  )
}
