import { Link } from 'react-router-dom';

const ViewCartBtn = () => {
	return (
		<Link
			to="cart"
			className="inline-block px-4 py-2 mt-4 text-white bg-green-700 rounded hover:bg-green-800 transition"
		>
			Cart
		</Link>
	);
};

export default ViewCartBtn;
