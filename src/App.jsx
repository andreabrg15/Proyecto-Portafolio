import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {

  return (
    <>
      <div className='min-h-dvh'>
        <Header></Header>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/proyectos" element={<Projects/>}></Route>
          </Routes>
        </main>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
