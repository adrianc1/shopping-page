import BackHomeBtn from '../components/BackHomeBtn';
import { Outlet, useParams } from 'react-router-dom';
import Card from '../components/Products';
const ShopPage = () => {
	const { id } = useParams();
	return (
		<div className="w-full justify-center items-center flex flex-col min-h-full gap-4">
			<BackHomeBtn />
			<h1 className="text-2xl"> Shop Your Favorite Items</h1>
			{id === '' ? <Outlet /> : <Card />}
		</div>
	);
};

export default ShopPage;
