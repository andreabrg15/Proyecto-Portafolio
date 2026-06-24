import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/proyectos" element={<Projects/>}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
