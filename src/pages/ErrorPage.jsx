import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<div className="flex flex-col font-bold">
			<h1>Oh no, this route doesn't exist!</h1>
			<Link to="/" className="text-blue-600">
				You can go back to the home page by clicking here, though!
			</Link>
		</div>
	);
};

export default ErrorPage;
