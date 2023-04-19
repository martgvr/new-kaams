import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from "./components/Sidebar/Sidebar"
import Header from "./components/Header/Header"
import Slider from "./components/Slider/Slider"
import Market from "./components/Market/Market"

function App() {
	return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Header />
          <Routes>
            <Route path='/' element={<Slider />} />
            <Route path='/market/' element={<Market />} />
          </Routes>
      </BrowserRouter>
    </div>
	)
}

export default App