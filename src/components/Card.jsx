import products from '../data/mockData';
const Card = () => {
	const items = products;

	return (
		<ul className="grid grid-cols-4 gap-4 w-full ">
			{items.map((item) => {
				return (
					<li className="border-2 rounded-2xl flex flex-col h-[300px]">
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
