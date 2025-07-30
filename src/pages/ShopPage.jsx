import BackHomeBtn from '../components/BackHomeBtn';
import { Outlet, useLocation } from 'react-router-dom';
import Card from '../components/Card';
const Shop = () => {
	let location = useLocation();
	return (
		<div className="w-full justify-center items-center flex flex-col min-h-full gap-4">
			<BackHomeBtn />
			<h1 className="text-2xl"> Shop Your Favorite Items</h1>
			{location.pathname === '/shop/cart' ? <Outlet /> : <Card />}
		</div>
	);
};

export default Shop;
