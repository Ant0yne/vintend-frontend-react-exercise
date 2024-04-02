import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Offer from "./pages/Offer";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(faBars, faXmark);

function App() {
	// Check if there is a cookie "token"
	// if not, init token with ""
	const [token, setToken] = useState(Cookies.get("token") || "");
	// display the modal to login
	const [isModalLog, setIsModalLog] = useState(false);
	// Check if the user try to sell or buy an offer
	const [preventRoute, setPreventRoute] = useState("");
	// The default price range on min and max
	const [priceRange, setPriceRange] = useState([0, 1000]);
	// to sort offers asc or desc
	const [checked, setChecked] = useState(false);
	// the input from the searchbar
	const [search, setSearch] = useState("");

	return (
		<Router>
			<Routes>
				{/* route by default */}
				<Route
					path="/"
					element={
						<Home
							token={token}
							setToken={setToken}
							priceRange={priceRange}
							setPriceRange={setPriceRange}
							checked={checked}
							setChecked={setChecked}
							search={search}
							setSearch={setSearch}
							isModalLog={isModalLog}
							setIsModalLog={setIsModalLog}
							preventRoute={preventRoute}
							setPreventRoute={setPreventRoute}
						/>
					}
				/>
				{/* route when queries for limit and page are sent */}
				<Route
					path="/offers"
					element={
						<Offers
							token={token}
							setToken={setToken}
							priceRange={priceRange}
							setPriceRange={setPriceRange}
							checked={checked}
							setChecked={setChecked}
							search={search}
							setSearch={setSearch}
							isModalLog={isModalLog}
							setIsModalLog={setIsModalLog}
							preventRoute={preventRoute}
							setPreventRoute={setPreventRoute}
						/>
					}
				/>
				{/* route to display a particular offer by id */}
				<Route
					path="/offer/:id"
					element={
						<Offer
							token={token}
							setToken={setToken}
							isModalLog={isModalLog}
							setIsModalLog={setIsModalLog}
							preventRoute={preventRoute}
							setPreventRoute={setPreventRoute}
						/>
					}
				/>
				{/* route to publish an offer */}
				<Route
					path="/publish"
					element={
						<Publish
							token={token}
							setToken={setToken}
							isModalLog={isModalLog}
							setIsModalLog={setIsModalLog}
							preventRoute={preventRoute}
							setPreventRoute={setPreventRoute}
						/>
					}
				/>
				{/* Route for payment */}
				<Route
					path="/payment"
					element={
						<Payment
							token={token}
							setToken={setToken}
							isModalLog={isModalLog}
							setIsModalLog={setIsModalLog}
							preventRoute={preventRoute}
							setPreventRoute={setPreventRoute}
						/>
					}
				/>
				{/* route 404 not found */}
				<Route
					path="*"
					element={
						<NotFound
							token={token}
							setToken={setToken}
							isModalLog={isModalLog}
							setIsModalLog={setIsModalLog}
							preventRoute={preventRoute}
							setPreventRoute={setPreventRoute}
						/>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
