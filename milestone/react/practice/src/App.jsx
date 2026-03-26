import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TestComponent from "./components/Test"
import ErrorBoundryComponent from './components/ErrorBoundryComponent'
import UseReducerComponent from './components/UseReducerComponent'

function App() {
  const [value, setValue] = useState(0)

  return (
    <>
    {/* <ErrorBoundryComponent>
      <TestComponent setValue={setValue} value={value}/>
    </ErrorBoundryComponent>
      {
        <h1>Value:{value}</h1>
      } */}

      <UseReducerComponent/>


    </>
  )
}




export default App
