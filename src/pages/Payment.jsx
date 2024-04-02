import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import HeaderHome from "../components/HeaderHome";
import CheckoutInfo from "../components/CheckoutInfo";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_STRIPE);

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
			<main id="checkout-main">
				<div className="container">
					<CheckoutInfo
						total={total}
						title={title}
						price={price}
						protecBuyer={protecBuyer}
						shippingCost={shippingCost}
					/>
					<Elements stripe={stripePromise} options={options}>
						<CheckoutForm id={id} title={title} price={total} />
					</Elements>
				</div>
			</main>
		</>
	);
};

export default Payment;
