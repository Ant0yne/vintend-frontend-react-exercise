import { Link } from "react-router-dom";

import "./pagination.css";

const Pagination = ({ limit, page, count, offers }) => {
	let counterPage = 0;
	// const createLink = () => {
	// 	const links = [];

	// 	for (let i = 0; i < offers.length; i++) {
	// 		const modulo = (i + 1) % limit;

	// 		modulo === 0 && counterPage++;
	// 	}

	// 	for (let i = 0; i < counterPage; i++) {
	// 		links.push("<Link to={/offers} state={limit, page} ></Link>");
	// 	}

	// 	return links;
	// };

	return (
		<>
			<section id="pagination">
				{offers.map((offer, i) => {
					if ((i + 1) % limit === 0) {
						counterPage++;
						return (
							<Link
								key={counterPage}
								to={`/offers?sort=price-asc&page=${counterPage}&limit=${limit}`}
								state={{ limit: limit, page: counterPage }}>
								{counterPage}
							</Link>
						);
					} else {
						return null;
					}
				})}
			</section>
		</>
	);
};

export default Pagination;
