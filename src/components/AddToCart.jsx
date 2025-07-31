import { ShoppingCart } from 'lucide-react';

const AddToCart = () => {
	return (
		<button className="px-2 py-2 text-white bg-green-700 rounded-full hover:bg-green-800 self-start">
			<ShoppingCart />
		</button>
	);
};

export default AddToCart;
