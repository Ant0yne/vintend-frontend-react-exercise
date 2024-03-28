import { Link } from "react-router-dom";

import "./headerHome.css";
import Cookies from "js-cookie";

const HeaderHome = ({ setIsModalSign, token, setToken, setIsModalLog }) => {
	// When click on "Se déconnecter" button
	const handleLogOut = () => {
		Cookies.remove("token");
		const tokenTemp = "";
		return setToken(tokenTemp);
	};

	const handleSignLog = (type) => {
		window.scrollTo({ top: 0, left: 0, behavior: "auto" });
		if (type === "sign") {
			setIsModalSign(true);
		} else {
			setIsModalLog(true);
		}
	};

	return (
		<>
			<header id="header-home">
				<div className="container">
					{/* the logo is a link to "/" */}
					<div id="header-home-logo">
						<Link to="/">
							<img
								src="https://lereacteur-vinted.netlify.app/static/media/logo.10b0caad793dd0a8ea72.png"
								alt=""
							/>
						</Link>
						<nav className="menu-w">
							<button>Menu</button>
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
									{" "}
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
