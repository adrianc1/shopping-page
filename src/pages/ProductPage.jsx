import products from '../data/mockData';
import FormattedPrice from '../components/FormattedPrice';
import QuantityIncrement from '../components/QuantityIncrement';
const ProductPage = ({ id }) => {
	const item = {
		id: 1,
		title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
		price: 109.95,
		description:
			'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
		category: "men's clothing",
		image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
		rating: {
			rate: 3.9,
			count: 120,
		},
	};
	return (
		<div className="flex justify-center mt-8">
			<li className=" border border-gray-200 rounded-2xl flex flex-col h-[550px] drop-shadow-2xl max-w-9/10 transition delay-50 duration-300 ease-in-out hover:scale-105">
				<div className="prd-img-cnt pt-8 flex-1 flex items-center justify-center overflow-hidden bg-gray-50 rounded-t-2xl">
					<img
						src={item.image}
						alt=""
						className="max-w-full max-h-full object-contain "
					/>
				</div>
				<div className="prd-info pt-8 flex flex-col flex-1 p-3 bg-white rounded-b-2xl">
					<span className="font-bold">{item.title}</span>
					<span className="my-2">{item.description}</span>
					<FormattedPrice price={item.price} />
					<QuantityIncrement />
					<span>{item.rating.rate} *</span>
				</div>
			</li>
		</div>
	);
};

export default ProductPage;
