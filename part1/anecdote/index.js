import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, givePoint] = useState(new Array(anecdotes.length).fill(0))

  const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min) ) + min

  const increasePoint = () => {
    const copy = [...points]
    copy[selected] += 1
    givePoint(copy)
  }

  const indexOfMaxValue = points.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}<br></br>
      has {points[selected]} votes</p>
      <button onClick={() => {increasePoint()}}>vote</button>
      <button onClick={() => {setSelected(getRndInteger(0,anecdotes.length))}}>nextAnecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[indexOfMaxValue]}<br></br>
      has {points[indexOfMaxValue]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)