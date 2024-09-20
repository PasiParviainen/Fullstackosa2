const Course = (props) => {
    console.log("Course props: ", props)
    return (
      <div>
        <Header course={props.course.name}/>
        {props.course.parts.map(part => (
          <Content content={part} key={part.id}/>
        ))}
        <Total parts={props.course.parts}/>
      </div>
    )
  }
  
  const Header = (props) => {
    console.log("Header props:", props)
    return (
      <div>
        <h2>{props.course}</h2>
      </div>
    )
  }
  
  const Content = (props) => {
    console.log("Content props:", props)
    return (
      <div>
        <p>{props.content.name}: {props.content.exercises}</p>
      </div>
    )
  }
  
  const Total = (props) => {
    console.log("Total props:", props)
    return (
      <div>
        <p>
          Total number of exercises: {
            props.parts.reduce(function(sum, part) {
              return sum + part.exercises
            }, 0)
          }
        </p>
      </div>
    )
  }
  
  const Part = (props) => {
    console.log("Part props:", props)
    return (
      <div>
        <p>
          {props.pt}: {props.ex}
        </p>
      </div>
    )
  }

  export default Course