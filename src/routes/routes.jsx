import Home from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import ShopPage from '../pages/ShopPage';
import Cart from '../pages/CartPage';
import PageLayout from '../layouts/PageLayout';
import ProductPage from '../pages/ProductPage';
const routes = [
	{
		path: '/',
		element: <PageLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: 'shop/:id?',
				element: <ShopPage />,
			},
			{ path: 'cart', element: <Cart /> },
		],
	},
];
export default routes;
