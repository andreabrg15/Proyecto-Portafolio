import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ProjectDetails from './pages/ProjectDetails'

function App() {

  return (
    <>
      <div className='min-h-dvh'>
        <Header></Header>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/proyectos" element={<Projects/>}></Route>
            <Route path="/contacto" element={<Contact/>}></Route>
            <Route path="/proyectos/:id" element={<ProjectDetails></ProjectDetails>}></Route>
          </Routes>
        </main>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
