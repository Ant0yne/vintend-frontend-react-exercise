import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import HeaderHome from "../components/HeaderHome";
import Hero from "../components/Hero";
import OffersHome from "../components/OffersHome";

const Offers = () => {
	const [dataPage, setDataPage] = useState();
	const [isLoading, setIsLoading] = useState(true);

	const location = useLocation();
	const { page, limit } = location.state;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://lereacteur-vinted-api.herokuapp.com/offers?sort=price-asc&page=${page}&limit=${limit}`
				);

				// EN ATTENDANT DE VOIR POUR LA REQUETE SERVEUR AVEC QUERY
				// const dataSlice = response.data.offers.slice(0, limit);
				// setDataPage({ count: limit, offers: dataSlice });

				setDataPage(response.data);
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
			<Link to="/">Home</Link>

			<HeaderHome />
			<Hero />
			<OffersHome {...dataPage} />
		</>
	);
};

export default Offers;
