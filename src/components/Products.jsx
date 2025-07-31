import products from '../data/mockData';
import FormattedPrice from './FormattedPrice';
import { Link } from 'react-router-dom';
const Products = () => {
	const items = products;

	return (
		<ul className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mx-auto justify-items-center">
			{items.map((item) => {
				return (
					<Link to={`/product-page`} key={item.id}>
						<li className=" border border-gray-200 rounded-2xl flex flex-col h-[350px] drop-shadow-2xl max-w-[300px] transition delay-50 duration-300 ease-in-out hover:scale-105">
							<div className="prd-img-cnt pt-8 flex-1 flex items-center justify-center overflow-hidden bg-gray-50 rounded-t-2xl">
								<img
									src={item.image}
									alt=""
									className="max-w-full max-h-full object-contain "
								/>
							</div>
							<div className="prd-info pt-8 flex flex-col flex-1 p-3 bg-white rounded-b-2xl">
								<span className="truncate font-bold">{item.title}</span>
								<FormattedPrice price={item.price} />
								<span>{item.rating.rate} *</span>
							</div>
						</li>
					</Link>
				);
			})}
		</ul>
	);
};

export default Products;
