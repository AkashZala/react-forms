import { useState } from 'react'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h1>Forms React (Sign-Up & Authenticate)</h1>
      <hr/>
      <SignUpForm token={token} setToken={setToken} />
      <hr/>
      <Authenticate token={token} setToken={setToken} />
    </>
  )
}

export default App
