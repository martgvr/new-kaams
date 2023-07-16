import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartContextProvider } from "../src/context/cart.context.jsx"

import Cart from "./components/Cart/Cart"
import Header from "./components/Header/Header"
import Slider from "./components/Slider/Slider"
import Market from "./components/Market/Market"
import Success from "./components/Success/Success"
import Sidebar from "./components/Sidebar/Sidebar"
import Checkout from "./components/Checkout/Checkout"
import NotFound from "./components/NotFound/NotFound"
import MarketProducts from "./components/MarketProducts/MarketProducts"
import MarketItemDetail from "./components/MarketItemDetail/MarketItemDetail"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<CartContextProvider>
					<Sidebar />
					<Header />
					<Routes>
						<Route path="/" element={<Slider />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/market" element={<Market />} />
						<Route path="/success" element={<Success />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/market/:gender" element={<MarketProducts />} />
						<Route path="/market/:gender/:itemid" element={<MarketItemDetail />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</CartContextProvider>
			</BrowserRouter>
		</div>
	)
}

export default App
