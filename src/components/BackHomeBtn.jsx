import { Link } from 'react-router-dom';

const BackHomeBtn = () => {
	return (
		<Link
			to="/"
			className="inline-block px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
		>
			← Back to Home
		</Link>
	);
};

export default BackHomeBtn;
