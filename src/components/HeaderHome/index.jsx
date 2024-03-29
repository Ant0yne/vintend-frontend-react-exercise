import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./headerHome.css";
import Cookies from "js-cookie";

const HeaderHome = ({
	setIsModalSign,
	setIsModalLog,
	isModalMenu,
	setIsModalMenu,
	token,
	setToken,
}) => {
	// the actual width of the screen
	const [width, setWidth] = useState(window.innerWidth);

	// When the width change, change the state width with the new width
	// Then stop listening to the width change
	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// If it's open, stop rendering the modal menu if width no more mobile size
	useEffect(() => {
		if (width > 960 && isModalMenu) {
			setIsModalMenu(false);
		}
	});

	/**
	 *  When click on "Se déconnecter" button
	 */
	const handleLogOut = () => {
		Cookies.remove("token");
		const tokenTemp = "";
		return setToken(tokenTemp);
	};

	/**
	 *
	 * @param {String} type
	 *
	 * return to the top of screen
	 *
	 * display Sign up modal or Login modal regarding wich button is click
	 */
	const handleSignLog = (type) => {
		window.scrollTo({ top: 0, left: 0, behavior: "auto" });
		if (type === "sign") {
			setIsModalSign(true);
		} else {
			setIsModalLog(true);
		}
	};

	/**
	 * open or close the mobile menu on click
	 */
	const handleMenu = () => {
		if (isModalMenu) {
			setIsModalMenu(false);
		} else {
			setIsModalMenu(true);
		}
	};

	return (
		<>
			<header id="header-home">
				<div className="container">
					{/* the logo is a link to "/" */}
					<div id="header-home-logo">
						<Link
							to="/"
							onClick={() => {
								setIsModalMenu(false);
							}}>
							<img
								src="https://lereacteur-vinted.netlify.app/static/media/logo.10b0caad793dd0a8ea72.png"
								alt=""
							/>
						</Link>
						<nav className="menu-w">
							<button onClick={handleMenu}>
								{/* change the icon if the mobile menu is open or not */}
								{!isModalMenu && <FontAwesomeIcon icon="bars" />}
								{isModalMenu && <FontAwesomeIcon icon="xmark" />}
							</button>
						</nav>
					</div>
					<div>
						<input
							type="text"
							name="search-bar"
							id="search-bar"
							placeholder="Rechercher des articles"
						/>
					</div>
					<nav className="header-m">
						{/* if there is a token in the state
						display the "Se déconnecter" button
						if the token is ""
						display the "S'inscrire" and "Se connecter" button */}
						{token !== "" ? (
							<div>
								<button
									onClick={() => {
										handleLogOut();
									}}>
									Se déconnecter
								</button>
							</div>
						) : (
							<div>
								<button onClick={() => handleSignLog("sign")}>
									S'inscrire
								</button>
								<button onClick={() => handleSignLog("log")}>
									Se connecter
								</button>
							</div>
						)}
						<button>Vends tes articles</button>
					</nav>
				</div>
			</header>
		</>
	);
};

export default HeaderHome;
