import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />  } />
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>    
    </>
  )
}

export default App
