import anecdoteService from '../services/anecdotes'
import { createNotification } from './notificationReducer'

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
  return async dispatch => {
    const newAnec = await anecdoteService.createNew(anec)
    dispatch({
      type: 'CREATE',
      data: newAnec
    })
    dispatch(createNotification(`a new anecdotes '${newAnec.content}' has been created`))
    setTimeout(() => dispatch(createNotification('')),5000)
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANEC',
      data: anecdotes
    })
  }
}

export default anecdoteReducer