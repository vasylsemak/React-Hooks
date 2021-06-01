import React, { useState, useReducer } from 'react'
import reducer, { initialState, addTodo } from './store'
import Todo from './Todo'

const Todos = () => {
  const [reducerState, dispatch] = useReducer(reducer, initialState )

  const handleSubmit = e => {
    e.preventDefault()
    const todo = {
      id: Date.now(),
      name: e.target.todo.value,
      complete: false
    }

    dispatch(addTodo(todo))
  }

  return (
    <div className='todos'>
      {reducerState.map(todo => <Todo key={todo.id} {...todo} />)}
      <form onSubmit={handleSubmit}>
        <input name='todo' placeholder="Enter todo" />
        <button type='submit'>ADD</button>
      </form>
    </div>
  )
}

export default Todos
