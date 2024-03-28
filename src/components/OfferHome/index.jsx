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
	const etat = product_details.find((detail) => detail.ÉTAT !== undefined);
	const marque = product_details.find((detail) => detail.MARQUE !== undefined);

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
