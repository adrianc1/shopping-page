import { Link } from 'react-router-dom';
import herobg from '../assets/ecom-hero-bg.jpg';

const Home = () => {
	return (
		<div
			className={`flex flex-col justify-center  items-center flex-1 border-amber-300 border-2 bg-cover bg-center`}
			style={{ backgroundImage: `url(${herobg})` }}
		>
			<div>hey come in and buy our junk!</div>
			<Link to="shop">
				<button className="border p-2 rounded-xl self-center bg-blue-500">
					Shop Now!
				</button>
			</Link>
		</div>
	);
};

export default Home;
