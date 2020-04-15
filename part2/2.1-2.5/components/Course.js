import React from 'react'

const Header = ({header}) => <h1>{header}</h1>

const Part = ({data}) => <p>{data.name} {data.exercises}</p>

const Content = ({data}) => {
  let totalNumber = 0
  const list = data.parts.map((x) => { 
      totalNumber += x.exercises
      return <Part key={x.id} data={x}/>
    }
  )
  return (
    <>
      <Header header={data.name}/>
      {list}
      <p>Total number of ex <b>{totalNumber}</b></p>
    </>
  )
}

const Course = ({course}) => {
  const postmap = course.map((x) => <Content key={x.id} data={x}/>)
  return postmap
}

export default Course