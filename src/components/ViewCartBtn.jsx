import { ShoppingCart } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ViewCartBtn = ({ cart }) => {
	// let count = 0;
	// useEffect(() => {
	// 	count = cart.length;
	// }, [cart]);
	return (
		<Link
			to="cart"
			className="flex gap-2 px-2 py-2 text-white bg-green-700 rounded hover:bg-green-800 transition"
		>
			<ShoppingCart />
			<span>{cart}</span>
		</Link>
	);
};

export default ViewCartBtn;
