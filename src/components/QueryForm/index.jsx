import { useState } from "react";
import { useNavigate } from "react-router-dom";

import QueryRange from "../QueryRange";
import QuerySwitch from "../QuerySwitch";

import "./queryForm.css";

const QueryForm = ({ offerRoute, priceRange, setPriceRange }) => {
	// all the state for the inputs' values to search and sort the offers
	const [checked, setChecked] = useState(false);
	const [search, setSearch] = useState("");

	// test
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
							{/* <div id="checkbox-query">
								<p>Trier par prix décroissant</p>
								<input
									type="checkbox"
									name="sort-price"
									id="sort-price"
									checked={checkbox}
									onChange={(e) => setCheckbox(e.target.checked)}
								/>
							</div> */}
						</div>
						<input
							type="submit"
							name="submit-query"
							id="submit-query"
							value="Lancer la recherche"
						/>
					</>
				)}
			</form>
		</>
	);
};

export default QueryForm;
