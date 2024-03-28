import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";

import "./App.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/offers" element={<Offers />} />
				<Route path="/offer/:id" element={<Offer />} />
				<Route path="*" element={<p>Error 404</p>} />
				{/* <Route path="/signup" element={<Signup />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
