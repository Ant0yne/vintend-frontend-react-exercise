import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import HeaderOffer from "../components/HeaderOffer";
import CarouselOffer from "../components/CarouselOffer";
import InfoOffer from "../components/InfoOffer";

const Offer = () => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
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
	}, []);

	return isLoading ? (
		<p>Loading ...</p>
	) : (
		<>
			<Link to="/">Home</Link>
			<HeaderOffer />
			<CarouselOffer
				image={data.product_image}
				pictures={data.product_pictures}
			/>
			<InfoOffer {...data} />
		</>
	);
};

export default Offer;
