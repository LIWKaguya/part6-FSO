import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AnecdoteForm from './components/anecdoteForm'
import { likeAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(likeAnecdote(id))
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
      <AnecdoteForm />
    </div>
  )
}

export default App