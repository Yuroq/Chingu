import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SummaryMetrics from '../components/MetricSearch'
import MeteorComposition from '../components/MeteorComposition'
import NumberOfStrikes from '../components/NumberOfStrikes'
import MassChart from '../components/MassChart'
import TotalStrikes from '../components/TotalStrikes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

   <NumberOfStrikes/>
<SummaryMetrics/>
<MeteorComposition/>
<TotalStrikes/>
      </div>
  
    </>
  )
}

export default App
