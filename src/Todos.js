import './App.css'
import React, { useState, useReducer } from 'react'
import reducer, {
  initialState,
  addTodo,
  removeTodo,
  toggleComplete
} from './store'
import Todo from './Todo'

const Todos = () => {
  const [state, setState] = useState('')
  const [todos, dispatch] = useReducer(reducer, initialState )

  return (
    <div className='todos'>
      <h2>TODOS</h2>
      <form className='form' onSubmit={handleAdd}>
        <input
          name='todo'
          value={state}
          placeholder="Enter todo"
          onChange={e => setState(e.target.value)}
        />
        <button className='btn-add' type='submit'>+</button>
      </form>
      {todos.map(todo =>
        <Todo
          key={todo.id} {...todo}
          handleRemove={handleRemove}
          handleComplete={handleComplete}
        />
      )}
    </div>
  )

  function handleAdd(e) {
    e.preventDefault()
    const todo = {
      id: Date.now(),
      name: e.target.todo.value,
      complete: false
    }
    dispatch(addTodo(todo))
    setState('')
  }

  function handleRemove(id) {
    dispatch(removeTodo(id))
  }

  function handleComplete(id) {
    console.log('Complete -> ', id)
    dispatch(toggleComplete(id))
  }
}

export default Todos
