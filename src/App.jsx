
import Navbar from "../src/Components/Navbar"
import './App.css'
import Search from './Components/Search'
import Value from './Components/Value'
import Footer from './Components/Footer'
import { Jobsboard } from "./Components/Jobsboard"

function App() {


  return (
    <>
    <Navbar/>
    <Search/>
    <Jobsboard/>
    <Value/>
    <Footer/>
    </>
  )
}

export default App
