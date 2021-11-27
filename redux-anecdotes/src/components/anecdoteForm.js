import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const anec = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(anec))
        dispatch(createNotification(`a new anecdotes '${anec}' has been created`))
        setTimeout(() => dispatch(createNotification('')),5000)
    }

    return (
      <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote'/></div>
        <button>create</button>
      </form>
      </>
    )
}

export default AnecdoteForm