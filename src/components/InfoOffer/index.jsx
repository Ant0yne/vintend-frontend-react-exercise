import { useNavigate } from "react-router-dom";

import "./infoOffer.css";

const InfOffer = ({
	_id,
	product_price,
	product_details,
	product_name,
	product_description,
	owner,
	token,
	setIsModalLog,
	preventRoute,
	setPreventRoute,
}) => {
	const navigate = useNavigate();
	const infoPayment = {
		state: { id: _id, title: product_name, price: product_price },
	};

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
				<button
					// If no token in cookie -> open the modale to log
					// If there is -> navigate to the payment route
					onClick={() =>
						token
							? navigate("/payment", infoPayment)
							: (setIsModalLog(true), setPreventRoute("payment"))
					}>
					Acheter
				</button>
			</div>
		</>
	);
};

export default InfOffer;
