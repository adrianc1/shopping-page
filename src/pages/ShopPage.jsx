import BackHomeBtn from '../components/BackHomeBtn';
import Card from '../components/Card';
const Shop = () => {
	return (
		<div className="flex flex-col min-h-full gap-4">
			<BackHomeBtn />
			<h1 className="text-2xl"> Shop Your Favorite Items</h1>
			<Card />
		</div>
	);
};

export default Shop;
