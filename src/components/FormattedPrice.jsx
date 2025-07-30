const FormattedPrice = ({ price }) => {
	const priceString = price.toString();
	const parts = priceString.split('.');

	if (parts[1] == undefined || parts[1].length < 2) {
		price = price.toFixed(2);
	}

	return <div>${price}</div>;
};

export default FormattedPrice;
