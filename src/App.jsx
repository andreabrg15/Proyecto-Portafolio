import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ProjectDetails from './pages/ProjectDetails'

function App() {

  const [ shouldtranslate, setShouldTranslate ] = useState(false);

  return (
    <>
      <div className='min-h-dvh'>
        <Header shouldTranslate={shouldtranslate} 
        onChange={() => shouldtranslate ? setShouldTranslate(false) : setShouldTranslate(true)}>
        </Header>
        <main>
          <Routes>
            <Route path="/" element={<Home shouldTranslate={shouldtranslate}/>}></Route>
            <Route path="/proyectos" element={<Projects shouldTranslate={shouldtranslate}/>}></Route>
            <Route path="/contacto" element={<Contact shouldTranslate={shouldtranslate}/>}></Route>
            <Route path="/proyectos/:id" element={<ProjectDetails shouldTranslate={shouldtranslate}></ProjectDetails>}></Route>
          </Routes>
        </main>
      </div>
      <Footer shouldTranslate={shouldtranslate}></Footer>
    </>
  )
}

export default App
