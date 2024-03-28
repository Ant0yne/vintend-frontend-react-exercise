import { Link } from "react-router-dom";

import "./pagination.css";

const Pagination = ({ limit, page, count }) => {
	let counterPage = 0;

	const countArr = [];

	for (let i = 0; i < count; i++) {
		countArr.push(i);
	}

	return (
		<>
			<section id="pagination">
				{countArr.map((counter, i) => {
					if ((i + 1) % limit === 0) {
						counterPage++;

						if (counterPage === Number(page)) {
							console.log("ok");
							return (
								<Link
									key={counterPage}
									to={`/offers?sort=price-asc&page=${counterPage}&limit=${limit}`}
									className="actual-page">
									{counterPage}
								</Link>
							);
						} else {
							return (
								<Link
									key={counterPage}
									to={`/offers?sort=price-asc&page=${counterPage}&limit=${limit}`}>
									{counterPage}
								</Link>
							);
						}
					} else {
						return null;
					}
				})}
			</section>
		</>
	);
};

export default Pagination;
