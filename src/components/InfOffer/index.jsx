import "./infOffer.css";

const InfOffer = ({
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
			<nav>
				{owner.account.avatar && (
					<img
						src={owner.account.avatar.secure_url}
						alt={owner.account.avatar.asset_id}
					/>
				)}
				<p>{owner.account.username}</p>
			</nav>
			<button>Acheter</button>
		</>
	);
};

export default InfOffer;
