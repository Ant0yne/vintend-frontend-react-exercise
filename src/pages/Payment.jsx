import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import HeaderHome from "../components/HeaderHome";
import CheckoutInfo from "../components/CheckoutInfo";
import CheckoutForm from "../components/CheckoutForm";

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
	const navigate = useNavigate();
	// To not display the query components (switch and range)
	const noQueryRoute = true;
	// The props sent with the navigate to Payment
	const location = useLocation();

	// Arbitrary cost
	const protecBuyer = 0.4;
	const shippingCost = 0.8;

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

	// The total to pay with all the costs
	const total = Number((price + protecBuyer + shippingCost).toFixed(2));

	// Transaction's option
	const options = {
		mode: "payment",
		amount: Number((total * 100).toFixed(0)),
		currency: "eur",
	};

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
			<main>
				<div className="container">
					<CheckoutInfo
						total={total}
						title={title}
						price={price}
						protecBuyer={protecBuyer}
						shippingCost={shippingCost}
					/>
					<Elements stripe={stripePromise} options={options}>
						<CheckoutForm id={id} title={title} price={price} />
					</Elements>
				</div>
			</main>
		</>
	);
};

export default Payment;
