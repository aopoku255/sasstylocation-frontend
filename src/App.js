import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import logo from './logo.svg';
import './App.css'
import Form from './components/Form'
import "toastify-js/src/toastify.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import Welcome from './components/Welcome';
import Table from './pages/Table';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/users" element={<Users />} />
          <Route path="/table" element={<Table />} />
          <Route path="/form" element={<Home />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
