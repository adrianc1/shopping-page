import BackHomeBtn from '../components/BackHomeBtn';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import BackToShopBtn from '../components/BackToShopBtn';
const Cart = () => {
	const { cart } = useOutletContext();

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
									<button className="text-red-500 font-bold px-4">X</button>
									<div className="">{item.title}</div>
								</div>
								<div className="px-4">{item.price}</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
export default Cart;
