import { useState } from "react";
import { useNavigate } from "react-router-dom";

import QueryRange from "../QueryRange";
import QuerySwitch from "../QuerySwitch";

import "./queryForm.css";

const QueryForm = ({
	offerRoute,
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
	 * @param {Object} e
	 *
	 * function when subimitting the form
	 *
	 * add all the query to the url then navigate to this url
	 *
	 */
	const sendQuery = () => {
		let url = "/offers?";
		checked
			? (url = url + "sort=price-asc&")
			: (url = url + "sort=price-desc&");
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
				{!offerRoute && (
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
