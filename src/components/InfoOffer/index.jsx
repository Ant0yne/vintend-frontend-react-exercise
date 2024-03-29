import "./infoOffer.css";

const InfOffer = ({
	product_price,
	product_details,
	product_name,
	product_description,
	owner,
}) => {
	return (
		<>
			<div className="info-offer">
				<h3>{product_price} €</h3>
				<article>
					{/* Display all the details that exist in the offer -> key name and value */}
					{product_details.map((detail) => {
						const key = Object.keys(detail).join("");
						return (
							<div key={key} className="detail">
								<p>{key}</p>
								<p>{detail[key]}</p>
							</div>
						);
					})}
				</article>
				{/* div just for un border line */}
				<div></div>
				<h4>{product_name}</h4>
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
			</div>
		</>
	);
};

export default InfOffer;
