import {
	PaymentElement,
	useElements,
	useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./checkoutForm.css";

const CheckoutForm = ({ id, title, price }) => {
	// if error message when submit the payment form
	const [errorMessage, setErrorMessage] = useState(null);
	// waiting for response after submit payment
	const [isLoading, setIsLoading] = useState(false);
	// check if payment is done
	const [paymentDone, setPaymentDone] = useState(false);

	// To make the payment request to Stripe
	const stripe = useStripe();
	// To send the users input
	const elements = useElements();

	const handlePayment = async (e) => {
		e.preventDefault();
		// Start the payment process
		setIsLoading(true);

		try {
			// if elements still a promise return
			if (elements == null) {
				return;
			}

			// Request to Stripe with all the inputs from the form to check
			// If error return
			const { error: submitError } = await elements.submit();
			if (submitError) {
				setErrorMessage(submitError.message);
				setIsLoading(false);
				return;
			}

			// Request to back the PaymentIntent creation
			// If ok, return the clientSecret key
			const response = await axios.post(
				import.meta.env.VITE_API_URL + "/payment",
				{
					title: title,
					amount: price,
				}
			);
			const clientSecret = response.data.client_secret;

			// Request for payment
			const { error, paymentIntent } = await stripe.confirmPayment({
				// Send the input from form and the PaymentIntent key
				elements,
				clientSecret,
				// A route to redirect (blocked)
				confirmParams: {
					return_url: import.meta.env.VITE_API_URL,
				},
				redirect: "if_required",
			});

			// Display the error if the payment failed
			if (error) {
				setErrorMessage(error.message);
			}

			if (paymentIntent.status === "succeeded") {
				setPaymentDone(true);
			}

			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	return paymentDone ? (
		<section id="checkout-form">
			<p>Achat Terminé !</p>
			<button>
				<Link to="/">Retour à l'Acceuil</Link>
			</button>
		</section>
	) : (
		<section id="checkout-form">
			<form onSubmit={handlePayment}>
				<PaymentElement />
				<button
					id="submit-payment"
					// Disable the submit if a payment try is in progress
					// or if the PaymentElement is not loaded
					disabled={!stripe || !elements || isLoading}>
					Payer
				</button>

				{errorMessage && <p>{errorMessage}</p>}
			</form>
		</section>
	);
};

export default CheckoutForm;
