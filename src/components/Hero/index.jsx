import { useNavigate } from "react-router-dom";

import "./hero.css";

const Hero = ({ token, setIsModalLog, setPreventRoute }) => {
	const navigate = useNavigate();
	return (
		<>
			<section id="hero">
				<div id="hero-bg">
					<div id="torn-effect"></div>
				</div>
				<div id="tri">
					<h2>Prêts à faire du tri dans vos placards ?</h2>
					<button
						onClick={() =>
							// If no token in cookie -> open the modale to log
							// If there is -> navigate to the publish route
							token
								? navigate("/publish")
								: (setIsModalLog(true), setPreventRoute("publish"))
						}>
						Commencer à vendre
					</button>
				</div>
			</section>
		</>
	);
};

export default Hero;
