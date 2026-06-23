import { useState } from 'react'
import './App.css'
import Footer from './components/footer'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Footer></Footer>
    </>
  )
}

export default App
