import { useNavigate } from "react-router-dom";

import QueryRange from "../QueryRange";
import QuerySwitch from "../QuerySwitch";

import "./queryForm.css";

const QueryForm = ({
	noQueryRoute,
	priceRange,
	setPriceRange,
	checked,
	setChecked,
	search,
	setSearch,
}) => {
	const navigate = useNavigate();

	/**
	 *
	 * function when subimitting the form
	 *
	 * add all the query to the url then navigate to this url
	 *
	 */
	const sendQuery = (tempChecked) => {
		let url = "/offers?";
		let finalchecked;
		tempChecked ? (finalchecked = !checked) : (finalchecked = checked);
		finalchecked
			? (url = url + "sort=price-desc&")
			: (url = url + "sort=price-asc&");
		url = url + "priceMin=" + priceRange[0] + "&";
		url = url + "priceMax=" + priceRange[1] + "&";
		url = url + "title=" + search;
		navigate(url);
	};

	return (
		<>
			<form
				id="form-query"
				onSubmit={(e) => {
					e.preventDefault();
					sendQuery();
				}}>
				<input
					type="text"
					name="search-bar"
					id="search-bar"
					placeholder="Rechercher des articles"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				{!noQueryRoute && (
					<>
						<div id="check-range-query">
							{/* component for the price range */}
							<QueryRange
								rtl={false}
								values={priceRange}
								setValues={setPriceRange}
								sendQuery={sendQuery}
							/>
							<QuerySwitch
								checked={checked}
								setChecked={setChecked}
								sendQuery={sendQuery}
							/>
						</div>
					</>
				)}
			</form>
		</>
	);
};

export default QueryForm;
