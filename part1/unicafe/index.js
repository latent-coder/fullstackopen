import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, number}) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{number}</td>
		</tr>
	)
}

const Statistics = ({data}) => {
	if(data.totalNumber === 0){
		return <p>There's nothing to be shown</p>
	}
	return(
		<>
			<table>
				<tbody>
					<Statistic text="good" number={data.good}/>
					<Statistic text="neutral" number={data.neutral}/>
					<Statistic text="bad" number={data.bad}/>
					<Statistic text="all" number={data.totalNumber}/>
					<Statistic text="average" number={data.average}/>
					<Statistic text="positive" number={data.positive}/>
				</tbody>
			</table>
		</>
	)
}

const Button = ({handleClick, text}) => {
	return (
		<button onClick={handleClick}>
			{text}
		</button>
	)
}

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	
	const totalNumber = good + neutral + bad
	const average = (good + bad * (-1)) / totalNumber
	const positive = ((good / totalNumber) * 100) + "%"

	const dataObject = {
		good: good,
		neutral: neutral,
		bad: bad,
		totalNumber: totalNumber,
		average: average,
		positive: positive
	}

	return (
		<>
			<h1>give feedback</h1>
			<Button text="good" handleClick={() => setGood(good+1)}/>
			<Button text="neutral" handleClick={() => setNeutral(neutral+1)}/>
			<Button text="bad" handleClick={() => setBad(bad+1)}/>
			<h1>statistics</h1>
			<Statistics data={dataObject}/>
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))