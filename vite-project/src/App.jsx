import Home from './components/Home'
import './App.css'
import About from './components/classComponent/functionalComponent/About'
import ClassComp from './components/classComponent/ClassComp'
import Contact from './components/classComponent/functionalComponent/Contact'
import Gallery from './components/classComponent/functionalComponent/Gallery'
import NavBar from './components/classComponent/functionalComponent/NavBar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {

  return (
    <>
      <div>
        
        <Home />
        <ClassComp/>
        <NavBar />
        <Gallery />
        <Contact />
        <About college = "Kongu Engineering College"/>

      </div>

    </>
  )
}

export default App
