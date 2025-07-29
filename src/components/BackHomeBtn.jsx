import { Link } from 'react-router-dom';

const BackHomeBtn = () => {
	return (
		<Link
			to="/"
			className="self-start w-auto px-4 py-2 mt-4 text-white bg-green-700 rounded hover:bg-blue-700 transition "
		>
			← Back to Home
		</Link>
	);
};

export default BackHomeBtn;
