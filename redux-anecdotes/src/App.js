import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createAnecdote, likeAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(likeAnecdote(id))
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    const anec = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(anec))
  }
   
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort((mine, yours) => yours.votes - mine.votes) 
      .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote'/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App