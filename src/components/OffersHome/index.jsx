import OfferHome from "../OfferHome";

import "./offersHome.css";

const OffersHome = ({ count, offers }) => {
	return (
		<>
			{offers.map((offer) => {
				return <OfferHome key={offer._id} {...offer} />;
			})}
		</>
	);
};

export default OffersHome;
