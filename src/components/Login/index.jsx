import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./login.css";

const Login = ({ setIsModalLog, setIsModalSign, setToken }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isError, setIsError] = useState(false);

	const sendData = async (e) => {
		e.preventDefault();

		if (
			!email ||
			!password ||
			email.indexOf(".") === email.length - 1 ||
			email.trim().split(/[@.]/).length < 3
		) {
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
				console.log(error.response);
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
