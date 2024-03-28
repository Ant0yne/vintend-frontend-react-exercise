import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Offer from "./pages/Offer";

import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(faBars, faXmark);

function App() {
	return (
		<Router>
			<Routes>
				{/* route by default */}
				<Route path="/" element={<Home />} />
				{/* route when queries for limit and page are sent */}
				<Route path="/offers" element={<Offers />} />
				{/* route to display a particular offer by id */}
				<Route path="/offer/:id" element={<Offer />} />
				{/* route 404 not found */}
				<Route path="*" element={<p>Error 404</p>} />
			</Routes>
		</Router>
	);
}

export default App;
