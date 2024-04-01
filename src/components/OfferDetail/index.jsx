import CarouselOffer from "../CarouselOffer";
import InfOffer from "../InfoOffer";

import "./offerDetail.css";

const OfferDetail = ({ data }) => {
	return (
		<>
			<main>
				<section className="offer-detail">
					<div className="container">
						{data.product_pictures.length > 1 ? (
							<CarouselOffer
								image={data.product_image}
								pictures={data.product_pictures}
							/>
						) : (
							<img
								id="image-solo-offer"
								src={data.product_pictures[0].secure_url}
								alt={data.product_pictures[0].secure_url}
							/>
						)}
						<InfOffer {...data} />
					</div>
				</section>
			</main>
		</>
	);
};

export default OfferDetail;
