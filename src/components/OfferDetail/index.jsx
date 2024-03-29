import CarouselOffer from "../CarouselOffer";
import InfOffer from "../InfoOffer";

import "./offerDetail.css";

const OfferDetail = ({ data }) => {
	return (
		<>
			<main>
				<section className="offer-detail">
					<div className="container">
						<CarouselOffer
							image={data.product_image}
							pictures={data.product_pictures}
						/>
						<InfOffer {...data} />
					</div>
				</section>
			</main>
		</>
	);
};

export default OfferDetail;
