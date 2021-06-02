import React from 'react'

const Todo = ({ id, name, handleRemove }) => (
  <div className='todo'>
    <h3>{name}</h3>
    <button onClick={() => handleRemove(id)} className='btn-remove'>-</button>
  </div>
)

export default Todo
