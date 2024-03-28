import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import HeaderHome from "../components/HeaderHome";
import CarouselOffer from "../components/CarouselOffer";
import InfOffer from "../components/InfoOffer";
import SignComp from "../components/SignComp";
import Login from "../components/Login";

const Offer = () => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	// display the modal to sign
	const [isModalSign, setIsModalSign] = useState(false);
	// display the modal to login
	const [isModalLog, setIsModalLog] = useState(false);
	// Check if there is a cookie "token"
	// if not, init token with ""
	const [token, setToken] = useState(Cookies.get("token") || "");
	const { id } = useParams();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "auto" });

		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
				);

				const data = response.data;

				setData(data);
				setIsLoading(false);
			} catch (error) {
				console.log(error.response);
			}
		};

		fetchData();
	}, [id]);

	return isLoading ? (
		<p>Loading ...</p>
	) : (
		<>
			<Link to="/">Home</Link>
			<HeaderHome
				setIsModalSign={setIsModalSign}
				token={token}
				setToken={setToken}
				setIsModalLog={setIsModalLog}
			/>
			<CarouselOffer
				image={data.product_image}
				pictures={data.product_pictures}
			/>
			<InfOffer {...data} />
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

export default Offer;
