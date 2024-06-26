import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./login.css";

const Login = ({
	setIsModalLog,
	setIsModalSign,
	setToken,
	preventRoute,
	setPreventRoute,
}) => {
	// state for all the input values
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isError, setIsError] = useState(
		"This is a placeholder to prevent the layout to move"
	);

	const navigate = useNavigate();

	/**
	 *
	 * @param {Object} e
	 *
	 *  function when subimitting the form
	 */
	const sendData = async (e) => {
		setIsError("This is a placeholder to prevent the layout to move");
		e.preventDefault();

		try {
			const response = await axios.post(
				import.meta.env.VITE_API_URL + "/user/login",
				{
					email: email,
					password: password,
				}
			);

			// Create cookie and assign it to state the close the log modale
			Cookies.set("token", response.data.token, { expires: 10 });
			setToken(response.data.token);
			setIsModalLog(false);

			// If the user was sent to Login by clicking on "Vends tes articles" button
			// navigate directly to the Publish Route
			if (preventRoute === "publish") {
				setPreventRoute(false);
				navigate("/publish");
			} else if (preventRoute === "payment") {
				setPreventRoute(false);
				navigate("/payment");
			}
		} catch (error) {
			const errMsg = error.response.data.message;

			if (errMsg === "User not found") {
				setIsError("Email ou mot de passe invalide.");
			} else {
				setIsError(error.response.data.message);
			}
		}
	};

	return (
		<>
			<section
				id="login"
				onClick={() => {
					setIsModalLog(false);
				}}>
				<div id="login-modal" onClick={(e) => e.stopPropagation()}>
					<button
						onClick={() => {
							setIsModalLog(false);
						}}
						className="close-modal">
						X
					</button>
					<form onSubmit={(e) => sendData(e)}>
						<h2>Se connecter</h2>

						{/* The error from the request to display */}
						<span
							className={
								isError !==
								"This is a placeholder to prevent the layout to move"
									? ""
									: "errorSignup"
							}>
							{isError}
						</span>

						<input
							className="typing-modal"
							type="email"
							name="emailLogin"
							id="emailLogin"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							className="typing-modal"
							type="password"
							name="passwordLogin"
							id="passwordLogin"
							placeholder="Mot de passe"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<input
							type="submit"
							name="submitLogin"
							id="submitLogin"
							value="Se Connecter"
						/>
					</form>
					{/* switch from login modal to signup modal */}
					<button
						onClick={() => {
							setIsModalLog(false);
							setIsModalSign(true);
						}}>
						Pas encore de compte ? Inscris-toi !
					</button>
				</div>
			</section>
		</>
	);
};

export default Login;
