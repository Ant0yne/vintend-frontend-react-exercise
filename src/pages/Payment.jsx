import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import HeaderHome from "../components/HeaderHome";

const stripePromise = loadStripe(
	"pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = ({
	token,
	setToken,
	isModalLog,
	setIsModalLog,
	preventRoute,
	setPreventRoute,
}) => {
	// To not display the query components (switch and range)
	const navigate = useNavigate();
	const noQueryRoute = true;
	const location = useLocation();

	useEffect(() => {
		// If not login -> redirect to Home and ask to log
		if (!token) {
			setIsModalLog(true);
			setPreventRoute("payment");
			navigate("/");
		}
		// If user doesn't come from an Offer, redirect to Home
		if (!location.state) {
			navigate("/");
		}
	}, [token, setIsModalLog, setPreventRoute, location, navigate]);

	const { id, title, price } = location.state;

	// const options = {
	// 	mode: "payment",
	// 	amount: Number((price * 100).toFixed(0)),
	// 	currency: "eur",
	// };

	return (
		<>
			<HeaderHome
				token={token}
				setToken={setToken}
				noQueryRoute={noQueryRoute}
				isModalLog={isModalLog}
				setIsModalLog={setIsModalLog}
				preventRoute={preventRoute}
				setPreventRoute={setPreventRoute}
			/>
		</>
	);
};

export default Payment;
