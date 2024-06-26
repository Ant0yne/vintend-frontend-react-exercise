import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import QueryForm from "../QueryForm";
import SignComp from "../SignComp";
import Login from "../Login";
import MenuMobile from "../MenuMobile";

import "./headerHome.css";
import Cookies from "js-cookie";

const HeaderHome = ({
	token,
	setToken,
	priceRange,
	setPriceRange,
	checked,
	setChecked,
	search,
	setSearch,
	noQueryRoute,
	isModalLog,
	setIsModalLog,
	preventRoute,
	setPreventRoute,
}) => {
	// the actual width of the screen
	const [width, setWidth] = useState(window.innerWidth);

	// display the modal to login
	const [isModalMenu, setIsModalMenu] = useState(false);
	// display the modal to sign
	const [isModalSign, setIsModalSign] = useState(false);

	const navigate = useNavigate();
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
	}, [width]);

	// If it's open, stop rendering the modal menu if width no more mobile size
	useEffect(() => {
		if (width > 960 && isModalMenu) {
			setIsModalMenu(false);
		}
	}, [isModalMenu, width]);

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
								src="https://najiwen.be/wp-content/uploads/2019/11/Vinted_logo-768x295.png"
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
						<QueryForm
							noQueryRoute={noQueryRoute}
							priceRange={priceRange}
							setPriceRange={setPriceRange}
							checked={checked}
							setChecked={setChecked}
							search={search}
							setSearch={setSearch}
						/>
					</div>
					<nav className="header-m">
						{/* if there is a token in the state display the "Se déconnecter" button
						if the token is "" display the "S'inscrire" and "Se connecter" button */}
						{token !== "" ? (
							<div>
								<button
									id="disconnect-button"
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
						<button
							// If no token in cookie -> open the modale to log
							// If there is -> navigate to the publish route
							onClick={() =>
								token
									? navigate("/publish")
									: (setIsModalLog(true), setPreventRoute("publish"))
							}>
							Vends tes articles
						</button>
					</nav>
				</div>
			</header>
			{isModalSign && (
				<SignComp
					setIsModalSign={setIsModalSign}
					setIsModalLog={setIsModalLog}
					setToken={setToken}
				/>
			)}
			{isModalLog && (
				<Login
					setIsModalLog={setIsModalLog}
					setIsModalSign={setIsModalSign}
					setToken={setToken}
					preventRoute={preventRoute}
					setPreventRoute={setPreventRoute}
				/>
			)}
			{isModalMenu && (
				<MenuMobile
					setIsModalSign={setIsModalSign}
					setIsModalLog={setIsModalLog}
					setIsModalMenu={setIsModalMenu}
					token={token}
					setToken={setToken}
					setPreventRoute={setPreventRoute}
				/>
			)}
		</>
	);
};

export default HeaderHome;
