import "./menuMobile.css";

const MenuMobile = ({ setIsModalMenu, setIsModalSign, setIsModalLog }) => {
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

	return (
		<>
			<section id="menu">
				<div id="menu-modal" onClick={(e) => e.stopPropagation()}>
					<nav>
						<button>Vendre tes articles</button>
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
					</nav>
				</div>
			</section>
		</>
	);
};

export default MenuMobile;
