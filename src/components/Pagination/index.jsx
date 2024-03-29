import { Link } from "react-router-dom";

import "./pagination.css";

const Pagination = ({ limit, page, count, url }) => {
	let counterPage = 0;

	const countArr = [];
	const limitArr = [5, 10, 15, 25, 50];
	let isLastPage = false;

	// create an array with the number of offers received
	for (let i = 0; i < count; i++) {
		countArr.push(i);
	}

	const createPage = () => {};

	return (
		<>
			<section id="pagination">
				<nav>
					{countArr.map((counter, i) => {
						if (counter % limit !== 0 && !isLastPage) {
							isLastPage = true;
							counterPage++;

							// check if this is the page already selected to underline it
							if (counterPage === Number(page)) {
								console.log("test");
								return (
									<Link
										key={counterPage}
										to={`${url}&page=${counterPage}&limit=${limit}`}
										className="actual-page">
										{counterPage}
									</Link>
								);
							} else {
								return (
									<Link
										key={counterPage}
										to={`${url}&page=${counterPage}&limit=${limit}`}>
										{counterPage}
									</Link>
								);
							}
						}
						// if the offer number modulo the limit = 0 create a new page
						if ((i + 1) % limit === 0) {
							counterPage++;

							// check if this is the page already selected to underline it
							if (counterPage === Number(page)) {
								console.log("test");
								return (
									<Link
										key={counterPage}
										to={`${url}&page=${counterPage}&limit=${limit}`}
										className="actual-page">
										{counterPage}
									</Link>
								);
							} else {
								return (
									<Link
										key={counterPage}
										to={`${url}&page=${counterPage}&limit=${limit}`}>
										{counterPage}
									</Link>
								);
							}
						} else {
							return null;
						}
					})}
				</nav>

				{counterPage > 1 && (
					<div>
						<p>Offres par page : </p>
						{limitArr.map((lim) => {
							// check if this is the actual limit to underline it
							if (lim === Number(limit)) {
								return (
									<Link
										key={lim}
										className="actual-page"
										to={`${url}&page=${page}&limit=${lim}`}>
										{lim}
									</Link>
								);
							} else {
								return (
									<Link key={lim} to={`${url}&page=${page}&limit=${lim}`}>
										{lim}
									</Link>
								);
							}
						})}
					</div>
				)}
			</section>
		</>
	);
};

export default Pagination;
