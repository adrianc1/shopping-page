import BackHomeBtn from '../components/BackHomeBtn';
import { Outlet, useParams } from 'react-router-dom';
import Products from '../components/Products';
import ProductPage from '../pages/ProductPage';

const ShopPage = () => {
	return (
		<div className="w-full justify-center items-center flex flex-col min-h-full gap-4">
			<h1 className="text-2xl my-4"> Shop Your Favorite Items</h1>
			<Products />
		</div>
	);
};

export default ShopPage;
