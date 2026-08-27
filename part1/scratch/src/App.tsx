type Props = {
  name: string;
  age: number;
}

const Hello = (props: Props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name} you are {props.age} years old</p>
    </div>
  )
}


const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Jake' age={27}/>
      <Hello name='Molly' age={28}/>
    </div>
  )
}

export default App