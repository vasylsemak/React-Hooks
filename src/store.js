
const ADD_TODO = 'ADD_TODO'


export const addTodo = todo => ({
  type: ADD_TODO,
  todo
})

export const initialState = [
  {id: 1, name: 'Buy groceries', complete: false },
  {id: 2, name: 'Call Mom', complete: false }
]

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      console.log('ADD ', action.todo)
      return [...state, action.todo]
    default:
      return state
  }
}
