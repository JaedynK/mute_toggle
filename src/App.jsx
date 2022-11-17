import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MuteToggle from './components/mute_toggle'


function App() {
 
  const [toggle, setToggle] = useState(false)



  return (
    <div className="App">
      <MuteToggle toggle={toggle} setToggle={setToggle} />
    </div>
  )
}

export default App
