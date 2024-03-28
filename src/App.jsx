import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Offer from "./pages/Offer";

import "./App.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/offers" element={<Offers />} />
				<Route path="/offer/:id" element={<Offer />} />
				<Route path="*" element={<p>Error 404</p>} />
			</Routes>
		</Router>
	);
}

export default App;
