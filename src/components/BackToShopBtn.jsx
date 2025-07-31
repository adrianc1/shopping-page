import { Link } from 'react-router-dom';

const BackToShopBtn = () => {
	return (
		<Link
			to="/shop"
			className="self-start w-auto px-4 py-2 mt-4 text-white bg-green-600 rounded hover:bg-blue-700 transition "
		>
			← Back to Shop
		</Link>
	);
};

export default BackToShopBtn;
