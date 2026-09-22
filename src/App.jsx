import './App.css'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of units {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
  )
}

const App = () => {
  const course = 'CSIT340'
  const part1 = {
    name: 'IT334',
    exercises: 3
  }
  const part2 = {
    name: 'CSIT335',
    exercises: 3
  }
  const part3 = {
    name: 'IT342',
    exercises: 3
  }

  return (
    <div className="app">
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

export default App