import './App.css'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.part.name} {props.part.exercises}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of units {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
}

const Footer = (props) => {
  return <footer>{props.fullName} - {props.courseCode} - {props.section}</footer>
}

const App = () => {
  const course = 'CSIT340'
  const parts = [
    {
      name: 'IT334',
      exercises: 3
    },
    {
      name: 'CSIT335',
      exercises: 3
    },
    {
      name: 'IT342',
      exercises: 3
    }
  ]

  const fullName = 'Hazel Kim C. Balacy'
  const courseCode = 'CSIT340'
  const section = 'G6'

  return (
    <div className="app">
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer fullName={fullName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App