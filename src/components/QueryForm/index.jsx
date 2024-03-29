import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./queryForm.css";

const QueryForm = () => {
	// all the state for the inputs' values to search and sort the offers
	const [checkbox, setCheckbox] = useState(false);
	const [search, setSearch] = useState("");
	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");

	const navigate = useNavigate();

	/**
	 *
	 * @param {Object} e
	 *
	 * function when subimitting the form
	 *
	 */
	const sendQuery = async (e) => {
		e.preventDefault();
		let url = "/offers?";
		checkbox
			? (url = url + "sort=price-desc&")
			: (url = url + "sort=price-asc&");
		url = url + "priceMin=" + minPrice + "&";
		url = url + "priceMax=" + maxPrice;
		navigate(url);
	};

	return (
		<>
			<form onSubmit={sendQuery}>
				<input
					type="text"
					name="search-bar"
					id="search-bar"
					placeholder="Rechercher des articles"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<div>
					<p>Trier par prix croissant</p>
					<input
						type="checkbox"
						name="sort-price"
						id="sort-price"
						checked={checkbox}
						onChange={(e) => setCheckbox(e.target.checked)}
					/>
				</div>
				<input
					type="number"
					name="min-price"
					id="min-price"
					placeholder="prix min."
					value={minPrice}
					onChange={(e) => setMinPrice(e.target.value)}
				/>
				<input
					type="number"
					name="max-price"
					id="max-price"
					placeholder="prix max."
					value={maxPrice}
					onChange={(e) => setMaxPrice(e.target.value)}
				/>
				<input
					type="submit"
					name="submit-query"
					id="submit-query"
					value="Rechercher"
				/>
			</form>
		</>
	);
};

export default QueryForm;
