import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import HeaderHome from "../components/HeaderHome";
import OfferDetail from "../components/OfferDetail";
import SignComp from "../components/SignComp";
import Login from "../components/Login";
import MenuMobile from "../components/MenuMobile";

const Offer = () => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	// display the modal to sign
	const [isModalSign, setIsModalSign] = useState(false);
	// display the modal to login
	const [isModalLog, setIsModalLog] = useState(false);
	// display the modal to login
	const [isModalMenu, setIsModalMenu] = useState(false);

	// Check if there is a cookie "token"
	// if not, init token with ""
	const [token, setToken] = useState(Cookies.get("token") || "");
	const { id } = useParams();

	useEffect(() => {
		//return to the top of screen
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
			<HeaderHome
				setIsModalSign={setIsModalSign}
				setIsModalLog={setIsModalLog}
				isModalMenu={isModalMenu}
				setIsModalMenu={setIsModalMenu}
				token={token}
				setToken={setToken}
			/>
			<OfferDetail data={data} />
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
			{isModalMenu && (
				<MenuMobile
					setIsModalSign={setIsModalSign}
					setIsModalLog={setIsModalLog}
					setIsModalMenu={setIsModalMenu}
					token={token}
					setToken={setToken}
				/>
			)}
		</>
	);
};

export default Offer;
