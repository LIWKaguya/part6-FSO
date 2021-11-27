import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const anec = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newAnec = await anecdoteService.createNew(anec)
        dispatch(createAnecdote(newAnec))
        dispatch(createNotification(`a new anecdotes '${newAnec.content}' has been created`))
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