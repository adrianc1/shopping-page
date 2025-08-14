import FormattedPrice from './FormattedPrice';
export default function Subtotal({ cart }) {
	const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
	return (
		<div className="flex justify-end w-full px-4 font-bold">
			<h5 className="pr-4">Total Price:</h5>
			<FormattedPrice price={total} />
		</div>
	);
}
