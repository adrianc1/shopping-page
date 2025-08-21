import { useReducer } from 'react';
import cartReducer from '../hooks/cartReducer';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PageLayout = () => {
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
		});
	};

	// manually update quantity
	const handleUpdateQuantity = (product, value) => {
		dispatch({
			type: 'update',
			id: product.id,
			value: value,
		});
	};

	// increment quantity by 1 unit
	const incrementQuantity = (product) => {
		dispatch({
			type: 'increment',
			id: product.id,
		});
	};

	// decrement quantity by 1 unit
	const decrementQuantity = (product) => {
		dispatch({
			type: 'decrement',
			id: product.id,
		});
	};

	return (
		<div className="w-full flex flex-col min-h-screen bg-cover bg-center">
			<Navbar cart={cart} />
			<main className="w-full flex-1  flex h-full justify-center">
				<Outlet
					context={{
						cart,
						handleAddToCart,
						removeFromCart,
						incrementQuantity,
						decrementQuantity,
						handleUpdateQuantity,
					}}
				/>
			</main>
			<Footer />
		</div>
	);
};

const initialCart = [];

export default PageLayout;
