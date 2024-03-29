import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import HeaderHome from "../components/HeaderHome";
import Hero from "../components/Hero";
import OffersHome from "../components/OffersHome";
import Pagination from "../components/Pagination";

const Offers = ({ token, setToken }) => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	// display the modal to sign
	const [isModalSign, setIsModalSign] = useState(false);
	// display the modal to login
	const [isModalLog, setIsModalLog] = useState(false);
	// display the modal to login
	const [isModalMenu, setIsModalMenu] = useState(false);

	// retreive the queries
	const [queries] = useSearchParams();

	const limit = queries.get("limit");
	const page = queries.get("page");

	useEffect(() => {
		//return to the top of screen
		window.scrollTo({ top: 0, left: 0, behavior: "auto" });
		const fetchData = async () => {
			try {
				// send request with the queries
				const response = await axios.get(
					`https://lereacteur-vinted-api.herokuapp.com/offers?sort=price-asc&page=${page}&limit=${limit}`
				);

				setData(response.data);
				setIsLoading(false);
			} catch (error) {
				console.log("error.response");
			}
		};

		fetchData();
	}, [limit, page]);

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
			<OffersHome {...data} />
			<Pagination page={page} limit={limit} count={data.count} />
		</>
	);
};

export default Offers;
