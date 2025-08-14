import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const PageLayout = () => {
	const [cart, setCart] = useState([]);

	const handleAddToCart = (product) => {
		const item = cart.find((p) => p.id === product.id);
		if (item) {
			item.quantity++;
			console.log(item.quantity);
		} else {
			product = { ...product, quantity: 1 };
			setCart([...cart, product]);
		}
	};
	console.log(cart);

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
