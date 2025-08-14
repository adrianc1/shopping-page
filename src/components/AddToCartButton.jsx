import { ShoppingCart } from 'lucide-react';

const AddToCartButton = ({ product, cart, setCart }) => {
	const handleAddToCart = (e) => {
		e.preventDefault();
		setCart([...cart, product]);
		console.log(cart);
	};

	return (
		<button
			className="px-2 py-2 text-white bg-green-700 rounded-full hover:bg-green-800 self-start"
			onClick={handleAddToCart}
		>
			<ShoppingCart />
		</button>
	);
};

export default AddToCartButton;
