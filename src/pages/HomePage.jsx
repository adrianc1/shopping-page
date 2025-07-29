import { Link } from 'react-router-dom';
const Home = () => {
	return (
		<div
			className={`flex flex-col justify-between flex-1 border-amber-300 border-2`}
		>
			<div>some content and stuff</div>
			<Link to="shop">
				<button className="border p-2 rounded-xl self-center">Shop Now!</button>
			</Link>
		</div>
	);
};

export default Home;
