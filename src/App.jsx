import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Offer from "./pages/Offer";

import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(faBars, faXmark);

function App() {
	// Check if there is a cookie "token"
	// if not, init token with ""
	const [token, setToken] = useState(Cookies.get("token") || "");

	return (
		<Router>
			<Routes>
				{/* route by default */}
				<Route path="/" element={<Home token={token} setToken={setToken} />} />
				{/* route when queries for limit and page are sent */}
				<Route
					path="/offers"
					element={<Offers token={token} setToken={setToken} />}
				/>
				{/* route to display a particular offer by id */}
				<Route
					path="/offer/:id"
					element={<Offer token={token} setToken={setToken} />}
				/>
				{/* route 404 not found */}
				<Route path="*" element={<p>Error 404</p>} />
			</Routes>
		</Router>
	);
}

export default App;
