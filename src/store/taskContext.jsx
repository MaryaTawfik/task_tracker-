import React, { createContext, useContext, useEffect, useState } from 'react'

const TaskContext = createContext(null)

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    try {
      const raw = localStorage.getItem('tasks')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  const [dark, setDark] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('dark')) ?? false
    } catch {
      return false
    }
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(dark))
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  const addTask = (text) => {
    if (!text || !text.trim()) return
    const newTask = { id: Date.now().toString(), text: text.trim(), completed: false }
    setTasks((t) => [newTask, ...t])
  }

  const toggleTask = (id) => {
    setTasks((t) => t.map((task) => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  const deleteTask = (id) => {
    setTasks((t) => t.filter((task) => task.id !== id))
  }

  const value = { tasks, addTask, toggleTask, deleteTask, dark, setDark }

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

export function useTasks() {
  const ctx = useContext(TaskContext)
  if (!ctx) throw new Error('useTasks must be used inside TaskProvider')
  return ctx
}

export default TaskContext
