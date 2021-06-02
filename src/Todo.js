import React from 'react'

const line = {
  textDecoration: 'line-through',
  textDecorationColor: 'green',
  textDecorationThickness: '3px'

}

const Todo = ({ id, name, complete, handleRemove, handleComplete }) => (
  <div className='todo'>
    <h3
      style={complete
        ? line
        : {textDecoration: 'none'}}
      onClick={() => handleComplete(id)}
    >{name}</h3>
    <button onClick={() => handleRemove(id)} className='btn-remove'>-</button>
  </div>
)

export default Todo
