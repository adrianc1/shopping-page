import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const AddToCart = ({ product }) => {
	const [cartArray, setCartArray] = useState([]);

	function handleAddToCart(e) {
		e.preventDefault();
		setCartArray((prev) => [...prev, product]);
		console.log(cartArray);
	}

	return (
		<button className="px-2 py-2 text-white bg-green-700 rounded-full hover:bg-green-800 self-start">
			<ShoppingCart onClick={handleAddToCart} />
		</button>
	);
};

export default AddToCart;
