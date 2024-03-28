import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

import HeaderHome from "../components/HeaderHome";
import Hero from "../components/Hero";
import OffersHome from "../components/OffersHome";
import Pagination from "../components/Pagination";
import SignComp from "../components/SignComp";
import Login from "../components/Login";

const Home = () => {
	// data received by the request
	const [data, setData] = useState();
	// display a loading screen until data is received
	const [isLoading, setIsLoading] = useState(true);
	// data but with only the "defaultLimit" offers
	const [dataSlice, setDataSlice] = useState();
	// display the modal to sign
	const [isModalSign, setIsModalSign] = useState(false);
	// display the modal to login
	const [isModalLog, setIsModalLog] = useState(false);
	// Check if there is a cookie "token"
	// if not, init token with ""
	const [token, setToken] = useState(Cookies.get("token") || "");

	// the page displayed by default -> arbitrary number for now
	const defaultPage = 1;
	// the number of offers displayed by default -> arbitrary number for now
	const defaultLimit = 8;

	useEffect(() => {
		const fetchData = async () => {
			window.scrollTo({ top: 0, left: 0, behavior: "auto" });
			try {
				const response = await axios.get(
					"https://lereacteur-vinted-api.herokuapp.com/offers"
				);

				// shallow copy the data and slice it depending on the "defaultLimit"
				const dataTemp = { ...response.data };
				const offersSlice = dataTemp.offers.slice(0, defaultLimit);

				// assign the data sent by the request to data
				setData(response.data);
				// assigne the data sliced
				setDataSlice({ count: dataTemp.count, offers: offersSlice });
				// remove the loading screen
				setIsLoading(false);
			} catch (error) {
				console.log(error.response);
			}
		};

		fetchData();
	}, []);

	return isLoading ? (
		<p>Loading ...</p>
	) : (
		<>
			<HeaderHome
				setIsModalSign={setIsModalSign}
				token={token}
				setToken={setToken}
				setIsModalLog={setIsModalLog}
			/>
			<Hero />
			<OffersHome {...dataSlice} />
			<Pagination page={defaultPage} limit={defaultLimit} count={data.count} />
			{isModalSign && (
				<SignComp
					setIsModalSign={setIsModalSign}
					setIsModalLog={setIsModalLog}
					setToken={setToken}
				/>
			)}
			{isModalLog && (
				<Login
					setIsModalLog={setIsModalLog}
					setIsModalSign={setIsModalSign}
					setToken={setToken}
				/>
			)}
		</>
	);
};

export default Home;
