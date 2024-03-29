import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

import HeaderHome from "../components/HeaderHome";
import Hero from "../components/Hero";
import OffersHome from "../components/OffersHome";
import Pagination from "../components/Pagination";

const Home = ({ token, setToken }) => {
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
	// display the modal to login
	const [isModalMenu, setIsModalMenu] = useState(false);

	// the page displayed by default -> arbitrary number for now
	const defaultPage = 1;
	// the number of offers displayed by default -> arbitrary number for now
	const defaultLimit = 8;

	useEffect(() => {
		const fetchData = async () => {
			// return to the top of screen
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
				isModalSign={isModalSign}
				setIsModalSign={setIsModalSign}
				isModalLog={isModalLog}
				setIsModalLog={setIsModalLog}
				isModalMenu={isModalMenu}
				setIsModalMenu={setIsModalMenu}
				token={token}
				setToken={setToken}
			/>
			<Hero />
			<OffersHome {...dataSlice} />
			<Pagination page={defaultPage} limit={defaultLimit} count={data.count} />
		</>
	);
};

export default Home;
