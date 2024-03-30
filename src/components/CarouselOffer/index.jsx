import "./carouselOffer.css";

const CarouselOffer = ({ image, pictures }) => {
	return (
		<>
			<nav className="carousel-offer">
				<div>
					<img id="image" src={image.secure_url} alt={image.asset_id} />

					{/* For the carousel later */}

					{pictures.map((picture) => {
						return (
							<img
								key={picture.secure_url}
								src={picture.secure_url}
								alt={picture.asset_id}
							/>
						);
					})}
				</div>
			</nav>
		</>
	);
};

export default CarouselOffer;
