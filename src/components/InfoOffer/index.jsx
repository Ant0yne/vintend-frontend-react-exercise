import "./infoOffer.css";

const InfoOffer = ({
	product_price,
	product_details,
	product_name,
	product_description,
	owner,
}) => {
	return (
		<>
			<p>{product_price} €</p>
			{product_details.map((detail) => {
				const key = Object.keys(detail).join("");
				return (
					<>
						<div key={key} className="detail">
							<p>{key}</p>
							<p>{detail[key]}</p>
						</div>
					</>
				);
			})}
			<p>{product_name}</p>
			<p>{product_description}</p>
			{/* <nav>
				{owner.avatar && (
					<img src={owner.avatar.secure_url} alt={owner.avatar.asset_id} />
				)}
				<p>{owner.username}</p>
			</nav> */}
		</>
	);
};

export default InfoOffer;
