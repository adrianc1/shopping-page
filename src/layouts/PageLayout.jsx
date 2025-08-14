import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const PageLayout = () => {
	const [cart, setCart] = useState([]);

	const handleAddToCart = (product) => {
		setCart([...cart, product]);
	};

	return (
		<div className="w-full flex flex-col min-h-screen bg-cover bg-center">
			<Navbar cart={cart} />
			<main className="w-full flex-1  flex h-full justify-center">
				<Outlet context={{ cart, setCart, handleAddToCart }} />
			</main>
			<Footer />
		</div>
	);
};

export default PageLayout;
