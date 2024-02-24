import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import { MainCard } from "./components/MainCard"
import { Register } from "./components/Register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<MainCard />}></Route>
        <Route path="/register" element ={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
