import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

import "./signComp.css";

const SignComp = ({ setIsModalSign, setIsModalLog, setToken }) => {
	// state for all the input values
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isNews, setIsNews] = useState(false);
	const [isError, setIsError] = useState(false);

	/**
	 *
	 * @param {Object} e
	 *
	 * function when subimitting the form
	 *
	 */
	const sendData = async (e) => {
		e.preventDefault();

		// check all input are filled and if the mail is valid (xxxx@xxxx.xxxx)
		if (
			!username ||
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
					"https://lereacteur-vinted-api.herokuapp.com/user/signup",
					{
						username: username,
						email: email,
						password: password,
						newsletter: isNews,
					}
				);

				// Create cookie "token" with server's response -> expires arbitrary for now
				Cookies.set("token", response.data.token, { expires: 10 });
				setToken(response.data.token);
				setIsModalSign(false);
			} catch (error) {
				console.log(error.response.data);
			}
		}
	};

	return (
		<>
			<section
				id="signup"
				onClick={() => {
					setIsModalSign(false);
				}}>
				<div id="signup-modal" onClick={(e) => e.stopPropagation()}>
					<button
						onClick={() => {
							setIsModalSign(false);
						}}>
						X
					</button>
					<form onSubmit={(e) => sendData(e)}>
						<h2>S'inscrire</h2>

						{/* The error to display if input completion not ok */}
						<span className={isError ? "" : "errorSignup"}>
							Veuiller remplir tous les champs (email : xxxx@xxx.xxx)
						</span>

						<input
							type="text"
							name="signupInput"
							id="signupInput"
							placeholder="Nom d'utilisateur-ice"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<input
							type="email"
							name="emailSignup"
							id="emailSignup"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							name="passwordSignup"
							id="passwordSignup"
							placeholder="Mot de passe"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<div id="newsletter">
							<input
								type="checkbox"
								name="checkboxSignup"
								id="checkboxSignup"
								onClick={(e) => setIsNews(e.target.checked)}
							/>
							<p>S'inscrire à notre Newsletter</p>
						</div>
						<input
							type="submit"
							name="submitSignup"
							id="submitSignup"
							value="S'inscrire"
						/>
					</form>
					{/* switch from signup modal to login modal */}
					<button
						onClick={() => {
							setIsModalSign(false);
							setIsModalLog(true);
						}}>
						Tu as déjà un compte ? Connecte-toi !
					</button>
				</div>
			</section>
		</>
	);
};

export default SignComp;
