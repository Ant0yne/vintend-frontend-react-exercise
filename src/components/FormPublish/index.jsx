import axios from "axios";
import { useState } from "react";

import "./formPublish.css";

const FormPublish = ({ token, setToken }) => {
	const [file, setFile] = useState({});
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [brand, setBrand] = useState("");
	const [size, setSize] = useState("");
	const [color, setColor] = useState("");
	const [condition, setCondition] = useState("");
	const [location, setLocation] = useState("");
	const [price, setPrice] = useState("");
	const [checkbox, setCheckbox] = useState(false);

	const handlePublish = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("picture", file);
		formData.append("title", title);
		formData.append("description", description);
		formData.append("brand", brand);
		formData.append("size", size);
		formData.append("color", color);
		formData.append("condition", condition);
		formData.append("location", location);
		formData.append("price", price);
		formData.append("checkbox", checkbox);

		try {
			const response = await axios.post(
				"https://lereacteur-vinted-api.herokuapp.com/offer/publish",
				formData,
				{
					headers: {
						Authorization: "Bearer " + token,
						"Content-Type": "multipart/form-data",
					},
				}
			);

			console.log(response.data);
		} catch (error) {
			console.log(error.response.data.message);
		}
	};

	return (
		<main>
			<form onSubmit={(e) => handlePublish(e)} id="form-publish">
				<section>
					<input
						onChange={(e) => setFile(e.target.files[0])}
						type="file"
						name="file-publish"
						id="file-publish"
					/>
				</section>
				<section>
					<label htmlFor="title">
						<p>Title</p>
						<input
							onChange={(e) => setTitle(e.target.value)}
							type="text"
							name="title-publish"
							id="title-publish"
							placeholder="ex: Chemise costume"
							value={title}
						/>
					</label>
					<label htmlFor="description-publish">
						<p>Décris ton article</p>
						<input
							onChange={(e) => setDescription(e.target.value)}
							type="text"
							name="description-publish"
							id="description-publish"
							placeholder="ex: très tendance"
							value={description}
						/>
					</label>
				</section>
				<section>
					<label htmlFor="brand-publish">
						<p>Marque</p>
						<input
							onChange={(e) => setBrand(e.target.value)}
							type="text"
							name="brand-publish"
							id="brand-publish"
							placeholder="ex: Zara"
							value={brand}
						/>
					</label>
					<label htmlFor="size-publish">
						<p>Taille</p>
						<input
							onChange={(e) => setSize(e.target.value)}
							type="text"
							name="size-publish"
							id="size-publish"
							placeholder="ex: L/40/12"
							value={size}
						/>
					</label>
					<label htmlFor="color-publish">
						<p>Couleur</p>
						<input
							onChange={(e) => setColor(e.target.value)}
							type="text"
							name="color-publish"
							id="color-publish"
							placeholder="ex: bleu"
							value={color}
						/>
					</label>
					<label htmlFor="condition-publish">
						<p>État</p>
						<input
							onChange={(e) => setCondition(e.target.value)}
							type="text"
							name="condition-publish"
							id="condition-publish"
							placeholder="ex: neuf"
							value={condition}
						/>
					</label>
					<label htmlFor="location-publish">
						<p>Lieu</p>
						<input
							onChange={(e) => setLocation(e.target.value)}
							type="text"
							name="location-publish"
							id="location-publish"
							placeholder="Montpellier"
							value={location}
						/>
					</label>
				</section>
				<section id="price-check-publish">
					<label htmlFor="price-publish">
						<p>Prix</p>
						<input
							onChange={(e) => setPrice(e.target.value)}
							type="number"
							name="price-publish"
							id="price-publish"
							placeholder="0,00€"
							value={price}
						/>
					</label>
					<label htmlFor="checkbox-publish">
						<input
							onChange={(e) => setCheckbox(e.target.checked)}
							type="checkbox"
							name="checkbox-publish"
							id="checkbox-publish"
							value={checkbox}
						/>
						<p>Je suis intéressé-e par les échanges</p>
					</label>
				</section>
				<section>
					<input type="submit" value="Publier" />
				</section>
			</form>
		</main>
	);
};

export default FormPublish;
