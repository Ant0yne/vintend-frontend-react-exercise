import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import HeaderHome from "../components/HeaderHome";
import Hero from "../components/Hero";
import OffersHome from "../components/OffersHome";
import Pagination from "../components/Pagination";
import SignComp from "../components/SignComp";
import Login from "../components/Login";

const Offers = () => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	// display the modal to sign
	const [isModalSign, setIsModalSign] = useState(false);
	// display the modal to login
	const [isModalLog, setIsModalLog] = useState(false);
	// Check if there is a cookie "token"
	// if not, init token with ""
	const [token, setToken] = useState(Cookies.get("token") || "");

	const [queries] = useSearchParams();

	const limit = queries.get("limit");
	const page = queries.get("page");

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "auto" });
		const fetchData = async () => {
			try {
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
				setIsModalSign={setIsModalSign}
				token={token}
				setToken={setToken}
				setIsModalLog={setIsModalLog}
			/>
			<Hero />
			<OffersHome {...data} />
			<Pagination page={page} limit={limit} count={data.count} />
			{isModalSign && (
				<SignComp
					setIsModalSign={setIsModalSign}
					token={token}
					setToken={setToken}
				/>
			)}
			{isModalLog && (
				<Login
					setIsModalLog={setIsModalLog}
					token={token}
					setToken={setToken}
				/>
			)}
		</>
	);
};

export default Offers;
