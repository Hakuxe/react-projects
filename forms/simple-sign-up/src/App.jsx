import { useState } from 'react'
import SignUpForm from './components/SignUpForm/SignUpForm'

import './styles/app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-app">
      <SignUpForm />
    </div>
  )
}

export default App
