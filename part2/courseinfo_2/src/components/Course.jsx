const Header = (props) => {
  return (
    <h2>{props.course}</h2>
  )
}
const Part = (props) => {
  return (
    <p> {props.part} {props.exercises}</p>
  )
}
const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises}/>)}
    </div>
  )
}
const Total = ({ parts }) => (
  <h4>total of {parts.reduce(
    function(total,part){
      return total+part.exercises
    },0)} exercises
  </h4>
)
const Course = ({course}) => {
    return (
      <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
}

export default Course