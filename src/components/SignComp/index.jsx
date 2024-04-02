import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

import DropFilesPublish from "../DropFilesPublish";

import "./signComp.css";

const SignComp = ({ setIsModalSign, setIsModalLog, setToken }) => {
	// state for all the input values
	const [file, setFile] = useState([]);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isNews, setIsNews] = useState(false);
	const [isError, setIsError] = useState(
		"This is a placeholder to prevent the layout to move"
	);

	/**
	 *
	 * @param {Object} e
	 *
	 * function when subimitting the form
	 *
	 */
	const sendData = async (e) => {
		setIsError("This is a placeholder to prevent the layout to move");
		e.preventDefault();

		// Create the FormData to send
		const formData = new FormData();
		// Create an array with the pictures in the key "picture" in the formData

		formData.append("avatar", file[0]);
		formData.append("username", username);
		formData.append("email", email);
		formData.append("password", password);
		formData.append("newsletter", isNews);

		console.log(formData.get("avatar"));

		try {
			const response = await axios.post(
				import.meta.env.VITE_API_URL + "/user/signup",
				formData
			);

			// Create cookie "token" with server's response -> expires arbitrary for now
			Cookies.set("token", response.data.token, { expires: 10 });
			setToken(response.data.token);
			setIsModalSign(false);
		} catch (error) {
			const errMsg = error.response.data.message;

			if (errMsg === "Missing parameters") {
				setIsError("Veuillez remplir tous les champs.");
			} else if (errMsg === "This email already has an account") {
				setIsError("Un compte avec cet email existe déjà.");
			} else {
				setIsError(error.response.data.message);
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
						}}
						className="close-modal">
						X
					</button>
					<form onSubmit={(e) => sendData(e)}>
						<h2>S'inscrire</h2>

						<DropFilesPublish files={file} setFiles={setFile} isAvatar={true} />

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
							type="text"
							name="signupInput"
							id="signupInput"
							placeholder="Nom d'utilisateur-ice"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<input
							className="typing-modal"
							type="email"
							name="emailSignup"
							id="emailSignup"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							className="typing-modal"
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
