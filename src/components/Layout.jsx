import React from 'react'
import AddTodo from './AddTodo/AddTodo'
import Header from './Header/Header'
import ProgressTodo from './ProgressTodo/ProgressTodo'
import CompletedTodo from './CompletedTodo/CompletedTodo'

function Layout() {
  return (
    <>
    <Header/>
    <AddTodo/>
    <ProgressTodo/>
    <CompletedTodo/>
    </>
  )
}

export default Layout