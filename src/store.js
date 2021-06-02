const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'

export const addTodo = todo => ({ type: ADD_TODO, todo })
export const removeTodo = id => ({ type: REMOVE_TODO, id })
export const toggleComplete = id => ({ type: TOGGLE_COMPLETE, id })

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
    case TOGGLE_COMPLETE:
      return state.map(todo => {
        if (todo.id === action.id) return {...todo, complete: !todo.complete}
        else return todo
      })
    default:
      return state
  }
}
