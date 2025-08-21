import { useState } from 'react';
import { useReducer } from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function cartReducer(cart, action) {
	switch (action.type) {
		case 'delete': {
			console.log(cart);
			return cart.filter((t) => t.id !== action.id);
		}
		case 'added': {
			console.log('i run roo');
			return [...cart, action.product];
		}
		default: {
			throw Error('Unknown action' + action.type);
		}
	}
}

const initialCart = [];

const PageLayout = () => {
	// const [cart, setCart] = useState([]);
	const [cart, dispatch] = useReducer(cartReducer, initialCart);

	// Remove Item from cart
	const removeFromCart = (item) => {
		dispatch({
			type: 'delete',
			id: item.id,
		});
	};

	// Add product to cart
	const handleAddToCart = (product) => {
		dispatch({
			type: 'added',
			product: product,
			qty: 1,
		});
		// const isItemInCart = cart.find((p) => p.id === product.id);

		// if (isItemInCart) {
		// 	incrementQuantity(product);
		// } else {
		// 	product = { ...product, quantity: 1 };
		// 	setCart([...cart, product]);
		// }
	};

	// const handleUpdateQuantity = (product, value) => {
	// 	setCart(
	// 		cart.map((p) => {
	// 			return p.id === product.id ? { ...p, quantity: value } : p;
	// 		})
	// 	);
	// };

	// const incrementQuantity = (product) => {
	// 	setCart(
	// 		cart.map((p) => {
	// 			return p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p;
	// 		})
	// 	);
	// };

	// const decrementQuantity = (product) => {
	// 	setCart(
	// 		cart
	// 			.map((p) =>
	// 				p.id === product.id
	// 					? { ...p, quantity: Math.max(0, p.quantity - 1) }
	// 					: p
	// 			)
	// 			.filter((p) => p.quantity > 0)
	// 	);
	// };

	return (
		<div className="w-full flex flex-col min-h-screen bg-cover bg-center">
			<Navbar cart={cart} />
			<main className="w-full flex-1  flex h-full justify-center">
				<Outlet
					context={{
						cart,
						handleAddToCart,
						removeFromCart,
						// incrementQuantity,
						// decrementQuantity,
						// handleUpdateQuantity,
						dispatch,
					}}
				/>
			</main>
			<Footer />
		</div>
	);
};

export default PageLayout;
