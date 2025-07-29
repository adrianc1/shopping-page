import products from '../data/mockData';
const Card = () => {
	const items = products;

	return (
		<ul className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mx-auto ">
			{items.map((item) => {
				return (
					<li
						className=" border border-gray-200 rounded-xl flex flex-col h-[300px] drop-shadow-2xl max-w-[250px] transition delay-50 duration-300 ease-in-out hover:scale-105"
						key={item.id}
					>
						<div className="prd-img-cnt flex-1 flex items-center justify-center overflow-hidden bg-gray-50 ">
							<img
								src={item.image}
								alt=""
								className="max-w-full max-h-full object-contain "
							/>
						</div>
						<div className="prd-info flex flex-col flex-1 p-3">
							<span className="truncate">{item.title}</span>
							<span>{item.price}</span>
							<span>{item.rating.rate}</span>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default Card;
