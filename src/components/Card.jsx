import products from '../data/mockData';
import testimg from '../assets/testimg.jpg';
const Card = () => {
	const items = products;

	return (
		<ul className="grid grid-cols-5 gap-3 w-full">
			{items.map((item) => {
				return (
					<li className="border-2">
						<div className="prd-img-cnt">
							<img src={item.image} alt="" />
						</div>
						<div className="prd-info flex flex-col">
							<span>{item.title}</span>
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
