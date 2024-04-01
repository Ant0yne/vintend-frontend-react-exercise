import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import "./carouselOffer.css";

const CarouselOffer = ({ image, pictures }) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1,
			partialVisibilityGutter: 40,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 1,
			partialVisibilityGutter: 40,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1,
			partialVisibilityGutter: 40,
		},
	};

	return (
		<>
			<nav className="carousel-offer">
				<Carousel
					arrows={false}
					swipeable={true}
					draggable={true}
					showDots={true}
					responsive={responsive}
					ssr={true}
					infinite={true}
					keyBoardControl={true}
					customTransition="all .5"
					transitionDuration={500}
					containerClass="carousel-container"
					removeArrowOnDeviceType={["tablet", "mobile"]}
					deviceType={responsive}
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-40-px"
					// partialVisbile={true}
					centerMode={true}>
					<div>
						<img id="image" src={image.secure_url} alt={image.asset_id} />
					</div>
					{pictures.map((picture) => {
						return (
							<div key={picture.secure_url}>
								<img src={picture.secure_url} alt={picture.asset_id} />
							</div>
						);
					})}
				</Carousel>
			</nav>
		</>
	);
};

export default CarouselOffer;
