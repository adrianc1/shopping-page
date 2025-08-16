const FormattedPrice = ({ price }) => {
	const formatted = Number(price).toFixed(2);
	return <div>${formatted}</div>;
};

export default FormattedPrice;
