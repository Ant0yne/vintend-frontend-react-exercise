import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

import "./login.css";

const Login = ({ setIsModalLog, setIsModalSign, setToken }) => {
	// state for all the input values
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isError, setIsError] = useState(false);

	/**
	 *
	 * @param {Object} e
	 *
	 *  function when subimitting the form
	 */
	const sendData = async (e) => {
		e.preventDefault();

		// check all input are filled and if the mail is valid (xxxx@xxxx.xxxx)
		if (
			!email ||
			!password ||
			email.indexOf(".") === email.length - 1 ||
			email.trim().split(/[@.]/).length < 3
		) {
			// display the error
			setIsError(true);
		} else {
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
				console.log(error.response.data);
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
						}}>
						X
					</button>
					<form onSubmit={(e) => sendData(e)}>
						<h2>Se connecter</h2>

						{/* The error to display if input completion not ok */}
						<span className={isError ? "" : "errorSignup"}>
							Veuiller remplir tous les champs (email : xxxx@xxx.xxx)
						</span>

						<input
							type="email"
							name="emailLogin"
							id="emailLogin"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
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
