import BackHomeBtn from '../components/BackHomeBtn';
import { Outlet, useParams } from 'react-router-dom';
import AllProducts from '../components/AllProducts';

const ShopPage = () => {
	return (
		<div className="w-full justify-center items-center flex flex-col min-h-full gap-4">
			<h1 className="text-2xl my-4"> Shop Your Favorite Items</h1>
			<AllProducts />
		</div>
	);
};

export default ShopPage;
