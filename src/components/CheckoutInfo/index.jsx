import "./checkoutInfo.css";

const CheckoutInfo = ({ total, title, price, protecBuyer, shippingCost }) => {
	return (
		<section id="checkout-info">
			<p>Résumé de la commande</p>
			<div id="checkout-info-detail">
				<div>
					<p>Commande</p>
					<p>{price} €</p>
				</div>
				<div>
					<p>Frais de protection acheteurs</p>
					<p>{protecBuyer} €</p>
				</div>
				<div>
					<p>Frais de port</p>
					<p>{shippingCost} €</p>
				</div>
				<aside></aside>
			</div>
			<div id="checkout-total">
				<h3>Total</h3>
				<h3>{total} €</h3>
			</div>
			<p>
				Il ne vous rest plus qu'une étape pour vous offrir {title}. Vous allez
				payer {total} € (frais de protection et frais de port inclus).
			</p>
		</section>
	);
};

export default CheckoutInfo;
