import { Link } from "react-router-dom";

import "./pagination.css";

const Pagination = ({ limit, page, count, url }) => {
	let counterPage = 0;

	const countArr = [];
	// offer's number to display -> arbitrary choice
	const limitArr = [5, 10, 15, 25, 50];
	// to check if there is an extra page
	let isLastPage = false;

	// create an array with the number of offers received
	for (let i = 0; i < count; i++) {
		countArr.push(i);
	}

	const createPage = () => {
		// add a page
		counterPage++;

		// check if this is the page already selected to underline it
		// then create a link with the page number that navigate to it
		if (counterPage === Number(page)) {
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
	};

	return (
		<>
			<section id="page-limit">
				<nav id="pagination">
					{countArr.map((counter, i) => {
						// if there is some extra offer create an extra offer
						if (counter % limit !== 0 && !isLastPage) {
							isLastPage = true;
							return createPage();
						}
						// if the offer number modulo the limit = 0 create a new page
						if ((i + 1) % limit === 0) {
							return createPage();
						} else {
							return null;
						}
					})}
				</nav>

				{/* don't display a limit choice if all the offers are displayed */}
				{counterPage > 1 && (
					<div id="limit">
						<p>Offres par page : </p>
						{limitArr.map((lim) => {
							// don't display the limit numbers that are superior to offers number
							if (count - lim > 0) {
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
							} else {
								return null;
							}
						})}
					</div>
				)}
			</section>
		</>
	);
};

export default Pagination;
