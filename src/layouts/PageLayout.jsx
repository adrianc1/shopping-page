import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const PageLayout = () => {
	const [cart, setCart] = useState([]);

	const handleAddToCart = (product) => {
		const isItemInCart = cart.find((p) => p.id === product.id);
		if (isItemInCart) {
			setCart(
				cart.map((p) => {
					return p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p;
				})
			);
		} else {
			product = { ...product, quantity: 1 };

			setCart([...cart, product]);
		}
	};
	console.log('cart', cart);

	const removeFromCart = (item) =>
		setCart(cart.filter((p) => p.id !== item.id));

	return (
		<div className="w-full flex flex-col min-h-screen bg-cover bg-center">
			<Navbar cart={cart} />
			<main className="w-full flex-1  flex h-full justify-center">
				<Outlet context={{ cart, setCart, handleAddToCart, removeFromCart }} />
			</main>
			<Footer />
		</div>
	);
};

export default PageLayout;
