import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Offer from "./pages/Offer";

import "./App.css";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/offer/:id" element={<Offer />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
