import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import GeneralExplainationGraph from './components/generalExplainationGraph/generalExplainationGraph'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <GeneralExplainationGraph/>
      </section>
    </>
  )
}

export default App
