import OfferHome from "../OfferHome";

import "./offersHome.css";

const OffersHome = ({ count, offers }) => {
	return (
		<>
			<section id="offers">
				<div className="container">
					{/* display the selected offers on page */}
					{offers.map((offer) => {
						return <OfferHome key={offer._id} {...offer} />;
					})}
				</div>
			</section>
		</>
	);
};

export default OffersHome;
