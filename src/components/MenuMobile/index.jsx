import Cookies from "js-cookie";
import "./menuMobile.css";

const MenuMobile = ({
	setIsModalMenu,
	setIsModalSign,
	setIsModalLog,
	token,
	setToken,
}) => {
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

	// When click on "Se déconnecter" button
	const handleLogOut = () => {
		Cookies.remove("token");
		const tokenTemp = "";
		return setToken(tokenTemp);
	};

	return (
		<>
			<section id="menu">
				<div id="menu-modal" onClick={(e) => e.stopPropagation()}>
					<nav>
						<button>Vendre tes articles</button>
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
