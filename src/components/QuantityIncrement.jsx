import { useOutletContext } from 'react-router-dom';

const QuantityIncrement = ({ itemID, product }) => {
	const { cart, incrementQuantity, decrementQuantity } = useOutletContext();

	const itemInCart = cart.find((p) => p.id === itemID);
	return (
		<form className="flex flex-col justify-center items-center gap-2">
			<div className="flex gap-2">
				<button
					className="decrease bg-green-600 h-6 w-6 rounded-full text-white"
					onClick={(e) => {
						e.preventDefault();
						decrementQuantity(product);
					}}
				>
					-
				</button>
				<input
					type="number"
					name="quantity "
					value={itemInCart?.quantity || 0}
					onClick={(e) => e.preventDefault()}
					onChange={(e) => {
						const newQty = Number(e.target.value);
						if (newQty > 0) {
							const p = {
								...product,
								quantity: newQty,
							};
							incrementQuantity(p);
						}
					}}
					className="w-[30px] border text-center"
				/>
				<button
					className="increase bg-green-600 h-6 w-6 rounded-full text-white"
					onClick={(e) => {
						e.preventDefault();
						incrementQuantity(product);
					}}
				>
					+
				</button>
			</div>
		</form>
	);
};

export default QuantityIncrement;
