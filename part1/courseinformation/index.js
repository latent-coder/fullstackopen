import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => <h1>{course}</h1>

const Content = ({data}) => {

	return (
		<div>
			<Part part={data[0].name} exercises={data[0].exercises} />
			<Part part={data[1].name} exercises={data[1].exercises} />
			<Part part={data[2].name} exercises={data[2].exercises} />
      	</div>		
	)
}

const Total = (props) => <p>Number of exercises {props.data[0].exercises + props.data[1].exercises + props.data[2].exercises}</p>

const Part = ({part, exercises}) => <p>{part} {exercises}</p>

const Button = (props) => {
	return (
	  	<button onClick={props.handleClick}>
			{props.text}
		</button>
	)
}

const App = () => {
	const [counter, setCounter] = useState(0)

	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10
			},
			{
				name: 'Using props to pass data',
				exercises: 7
			},
			{
				name: 'State of a component',
				exercises: 14
			}
		]
	}

	const increaseByOne = () => setCounter(counter + 1)

	return (
		<div>
			<Header course={course.name} />
			<Content data={course.parts} />
			<Total data={course.parts}/>
			<div>{counter}</div>
      		<Button text="plus" handleClick={increaseByOne}/>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))