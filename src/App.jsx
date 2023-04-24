import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Cart from "./components/Cart/Cart"
import About from "./components/About/About"
import Header from "./components/Header/Header"
import Slider from "./components/Slider/Slider"
import Market from "./components/Market/Market"
import Sidebar from "./components/Sidebar/Sidebar"
import NotFound from "./components/NotFound/NotFound"
import MarketProducts from "./components/MarketProducts/MarketProducts"

function App() {
	return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Header />
          <Routes>
            <Route path='/' element={<Slider />} />
            <Route path='/cart/' element={<Cart />} />
            <Route path='/about/' element={<About />} />
            <Route path='/market/' element={<Market />} />
            <Route path='/market/:gender' element={<MarketProducts />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </div>
	)
}

export default App