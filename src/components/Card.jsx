import products from '../data/mockData';
const Card = () => {
	const items = products;

	return (
		<ul className="grid grid-cols-4 gap-4 w-full h-[200px] ">
			{items.map((item) => {
				return (
					<li className="border-2 rounded-2xl flex flex-col ">
						<div className="prd-img-cnt flex-3 flex items-center  ">
							<img src={item.image} alt="" className="w-full object-cover  " />
						</div>
						<div className="prd-info flex flex-col flex-1 py-12">
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
