import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ViewCartBtn = () => {
	return (
		<Link
			to="cart"
			className="flex gap-2 px-2 py-2 text-white bg-green-700 rounded hover:bg-green-800 transition"
		>
			<ShoppingCart />
			<span>0</span>
		</Link>
	);
};

export default ViewCartBtn;
