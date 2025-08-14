import BackHomeBtn from '../components/BackHomeBtn';
import { useState } from 'react';
import BackToShopBtn from '../components/BackToShopBtn';
const Cart = () => {
	const [cartItems, setCartItems] = useState([]);

	return (
		<div className="w-full flex flex-col justify-start items-start border-2">
			<BackToShopBtn />
			<h1>Hey I'm a cart!!</h1>
		</div>
	);
};
export default Cart;
