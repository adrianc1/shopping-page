import products from '../data/mockData';
import FormattedPrice from './FormattedPrice';
const Products = () => {
	const items = products;

	return (
		<ul className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mx-auto justify-items-center">
			{items.map((item) => {
				return (
					<li
						className=" border border-gray-200 rounded-2xl flex flex-col h-[350px] drop-shadow-2xl max-w-[300px] transition delay-50 duration-300 ease-in-out hover:scale-105"
						key={item.id}
					>
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
				);
			})}
		</ul>
	);
};

export default Products;
