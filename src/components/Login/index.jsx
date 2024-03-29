import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

import "./login.css";

const Login = ({ setIsModalLog, setIsModalSign, setToken }) => {
	// state for all the input values
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isError, setIsError] = useState(
		"This is a placeholder to prevent the layout to move"
	);

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
				"https://lereacteur-vinted-api.herokuapp.com/user/login",
				{
					email: email,
					password: password,
				}
			);
			Cookies.set("token", response.data.token, { expires: 10 });
			setToken(response.data.token);
			setIsModalLog(false);
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
