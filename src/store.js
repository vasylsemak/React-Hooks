const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'

export const addTodo = todo => ({
  type: ADD_TODO,
  todo
})
export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
})

export const initialState = [
  {id: 1, name: 'Buy groceries', complete: false },
  {id: 2, name: 'Call Mom', complete: false }
]

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return [...state, action.todo]
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}
