import { Link } from "react-router-dom";

import "./pagination.css";

const Pagination = () => {
	const page = 1;
	const limit = 8;

	return (
		<>
			<Link
				to={`/offers?page=${page}&limit=${limit}`}
				state={{
					page: page,
					limit: limit,
				}}>
				Test
			</Link>
		</>
	);
};

export default Pagination;
