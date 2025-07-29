import Home from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import Shop from '../pages/ShopPage';
import Cart from '../pages/CartPage';
import PageLayout from '../layouts/PageLayout';
const routes = [
	{
		path: '/',
		element: <PageLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <Home /> },
			{
				path: 'shop',
				element: <Shop />,
				children: [{ path: 'cart', element: <Cart /> }],
			},
		],
	},
];
export default routes;
