import { Link } from "react-router-dom";

import "./headerHome.css";
import Cookies from "js-cookie";

const HeaderHome = ({ setIsModalSign, token, setToken, setIsModalLog }) => {
	const handleLogOut = () => {
		Cookies.remove("token");
		const tokenTemp = "";
		return setToken(tokenTemp);
	};

	return (
		<>
			<header id="header-home">
				<div className="container">
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
								<button onClick={() => setIsModalSign(true)}>
									{" "}
									S'inscrire
								</button>
								<button onClick={() => setIsModalLog(true)}>
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
