import { Routes, Route } from 'react-router-dom'
// components
import Home from "./components/Home"
import Store from "./components/Store"
import About from "./components/About"
import Navbar from "./components/Navbar"
import ShoppingCartProvider from "./contexts/ShoppingCartContext"
// css files
import './App.css'

// bootstrap librry
import { Container } from 'react-bootstrap'
function App() {

  return (

    <ShoppingCartProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>

  )
}

export default App
