const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'LIKE':
      let votedAnecdote = state.find(anecdote => anecdote.id === action.data.id)
      votedAnecdote = {...votedAnecdote, votes: votedAnecdote.votes+1}
      return state.map(anecdote => anecdote.id !== votedAnecdote.id ? anecdote: votedAnecdote)
    case 'CREATE':
      return [...state, action.data]
    case 'INIT_ANEC':
      return action.data
    default:
      return state
  }
}

export const likeAnecdote = (id) => {
  return {
    type: 'LIKE',
    data: {
      id: id
    }
  }
}

export const createAnecdote = (anec) => {
  return {
    type: 'CREATE',
    data: anec
  }
}

export const initAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANEC',
    data: anecdotes
  }
}

export default anecdoteReducer