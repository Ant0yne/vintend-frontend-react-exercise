import { Link } from "react-router-dom";

import "./offerHome.css";

const OfferHome = ({
	_id,
	product_name,
	product_description,
	product_price,
	product_details,
	product_pictures,
	owner,
	product_image,
	product_date,
}) => {
	const avatar = owner.account.avatar;
	const username = owner.account.username;
	const etat = product_details.find((detail) => detail.ÉTAT !== undefined);
	const marque = product_details.find((detail) => detail.MARQUE !== undefined);

	const routeOffer = "/offer/" + _id;
	console.log(routeOffer);

	return (
		<>
			<div className="offer-home">
				<Link to={routeOffer}>
					<div>
						{avatar && <img src={avatar.secure_url} alt={avatar.asset_id} />}
						<p>{username}</p>
					</div>
					<img src={product_image.secure_url} alt={product_image.asset_id} />
					<p>{product_price} €</p>
					{etat && <p>{etat.ÉTAT}</p>}
					{marque && <p>{marque.MARQUE}</p>}
				</Link>
				;
			</div>
		</>
	);
};

export default OfferHome;
