import { Link } from "react-router-dom";

import "./offerHome.css";

const OfferHome = ({
	_id,
	product_price,
	product_details,
	owner,
	product_image,
}) => {
	const avatar = owner.account.avatar;
	const username = owner.account.username;
	// serach for the ÉTAT and MARQUE values for those keys
	// Those keys are not mandatory so can return undefined
	const etat = product_details.find((detail) => detail.ÉTAT !== undefined);
	const marque = product_details.find((detail) => detail.MARQUE !== undefined);

	// if the user click on the offer, navigate to the route offers with the id of the offer
	const routeOffer = "/offer/" + _id;

	return (
		<>
			<div className="offer-home">
				<Link to={routeOffer}>
					<div className="owner-home">
						{avatar && <img src={avatar.secure_url} alt={avatar.asset_id} />}
						<p>{username}</p>
					</div>
					<img
						className="img-home"
						src={product_image.secure_url}
						alt={product_image.asset_id}
					/>
					<p>{product_price} €</p>
					<aside>
						{etat && <p>{etat.ÉTAT}</p>}
						{marque && <p>{marque.MARQUE}</p>}
					</aside>
				</Link>
			</div>
		</>
	);
};

export default OfferHome;
