import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { likeAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'

const Anecdote = ({anecdote}) => {
    const dispatch = useDispatch()
    const vote = (anecdote) => {
        dispatch(likeAnecdote(anecdote.id))
        dispatch(createNotification(`you voted '${anecdote.content}'`))
        setTimeout(() => dispatch(createNotification('')),5000)
    }
    return (
        <div>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
    )
}

const AnecdoteList = () => {
    const anecdotes = useSelector(({filterWord, anecdotes}) => {
      if(filterWord === null) return anecdotes
      return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filterWord.toLowerCase()))
    })
    return (
        <>
        {anecdotes.sort((mine, yours) => yours.votes - mine.votes) 
        .map(anecdote =>
            <Anecdote anecdote={anecdote} key={anecdote.id}/>
            )}
        </>
    )
}

export default AnecdoteList