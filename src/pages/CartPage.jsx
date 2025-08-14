import { useOutletContext } from 'react-router-dom';
import Subtotal from '../components/Subtotal';
import FormattedPrice from '../components/FormattedPrice';
import BackToShopBtn from '../components/BackToShopBtn';
const Cart = () => {
	const { cart, removeFromCart } = useOutletContext();

	return (
		<div className="w-full flex flex-col justify-start items-start border-2">
			<BackToShopBtn />
			<div className="mx-auto w-full ">
				<h1 className="text-2xl">My Cart</h1>
				<ul className="w-full">
					{cart.map((item) => {
						return (
							<li key={item.id} className="flex border w-full justify-between">
								<div className="flex">
									<button
										className="text-red-500 font-bold px-4"
										onClick={(e) => {
											e.preventDefault();
											removeFromCart(item);
										}}
									>
										X
									</button>
									<div className="">{item.title}</div>
								</div>

								<div className="px-4">
									<FormattedPrice price={item.price} />
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<Subtotal cart={cart} />
		</div>
	);
};
export default Cart;
