import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./signComp.css";

const SignComp = ({ setIsModalSign }) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isNews, setIsNews] = useState(false);
	const [isError, setIsError] = useState(false);

	const sendData = async (e) => {
		e.preventDefault();

		if (
			!username ||
			!email ||
			!password ||
			email.indexOf(".") === email.length - 1 ||
			email.trim().split(/[@.]/).length < 3
		) {
			setIsError(true);
		} else {
			// try {
			// 	const response = await axios.post(
			// 		"https://lereacteur-vinted-api.herokuapp.com/offers?sort=price-asc",
			// 		{
			// 			username: username,
			// 			email: email,
			// 			password: password,
			// 			newsletter: isNews,
			// 		}
			// 	);
			// } catch (error) {
			// 	console.log(error.response);
			// }

			console.log({
				username: username,
				email: email,
				password: password,
				newsletter: isNews,
			});
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

						<Link>Tu as déjà un compte ? Connecte-toi !</Link>
					</form>
				</div>
			</section>
		</>
	);
};

export default SignComp;
