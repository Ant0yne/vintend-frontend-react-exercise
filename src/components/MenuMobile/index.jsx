import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";
import "./menuMobile.css";

const MenuMobile = ({
	setIsModalMenu,
	setIsModalSign,
	setIsModalLog,
	token,
	setToken,
	setPreventRoute,
}) => {
	const navigate = useNavigate();

	/**
	 *
	 * @param {String} type
	 *
	 * return to the top of screen
	 *
	 * display Sign up modal or Login modal regarding wich button is click
	 * deactivate the mobile menu
	 */
	const handleSignLog = (type) => {
		window.scrollTo({ top: 0, left: 0, behavior: "auto" });
		if (type === "sign") {
			setIsModalSign(true);
			setIsModalMenu(false);
		} else {
			setIsModalLog(true);
			setIsModalMenu(false);
		}
	};

	/**
	 *  When click on "Se déconnecter" button
	 */ const handleLogOut = () => {
		Cookies.remove("token");
		const tokenTemp = "";
		return setToken(tokenTemp);
	};

	return (
		<>
			<section id="menu">
				<div id="menu-modal" onClick={(e) => e.stopPropagation()}>
					<nav>
						<button
							// If no token in cookie -> open the modale to log
							// If there is -> navigate to the publish route
							onClick={() =>
								token
									? navigate("/publish")
									: (setIsModalLog(true), setPreventRoute(true))
							}>
							Vends tes articles
						</button>

						{/* if there is a token in the state
						display the "Se déconnecter" button
						if the token is ""
						display the "S'inscrire" and "Se connecter" button */}
						{token !== "" ? (
							<div>
								<button
									id="disconnect-button-mobile"
									onClick={() => {
										handleLogOut();
									}}>
									Se déconnecter
								</button>
							</div>
						) : (
							<div>
								<button
									onClick={() => {
										return handleSignLog("sign");
										// return console.log("test");
									}}>
									S'inscrire
								</button>
								<button
									onClick={() => {
										return handleSignLog("log");
									}}>
									Se connecter
								</button>
							</div>
						)}
					</nav>
				</div>
			</section>
		</>
	);
};

export default MenuMobile;
