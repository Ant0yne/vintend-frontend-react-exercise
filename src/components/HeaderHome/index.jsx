import { Link } from "react-router-dom";

import "./headerHome.css";

const HeaderHome = () => {
	const page = 1;
	const limit = 8;

	return (
		<>
			<header id="header-home">
				<Link
					id="test"
					to={`/offers?page=${page}&limit=${limit}`}
					state={{
						page: page,
						limit: limit,
					}}>
					Test
				</Link>
				<div className="container">
					<div id="header-home-logo">
						<img
							src="https://lereacteur-vinted.netlify.app/static/media/logo.10b0caad793dd0a8ea72.png"
							alt=""
						/>
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
						<div>
							<button> S'inscrire</button>
							<button>Se connecter</button>
						</div>
						<button>Vends tes articles</button>
					</nav>
				</div>
			</header>
		</>
	);
};

export default HeaderHome;
