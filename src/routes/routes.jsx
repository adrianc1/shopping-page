import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import PageLayout from '../layouts/PageLayout';
const routes = [
	{
		path: '/',
		element: <PageLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: 'shop', element: <Shop /> },
			{ path: 'cart', element: <Cart /> },
		],
	},
];
export default routes;
