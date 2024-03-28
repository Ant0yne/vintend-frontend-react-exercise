import OfferHome from "../OfferHome";

import "./offersHome.css";

const OffersHome = ({ count, offers }) => {
	// console.log("offers", offers);
	return (
		<>
			<section id="offers">
				<div className="container">
					{/* display all offers on page -> only the ones sliced */}
					{offers.map((offer) => {
						return <OfferHome key={offer._id} {...offer} />;
					})}
				</div>
			</section>
		</>
	);
};

export default OffersHome;
