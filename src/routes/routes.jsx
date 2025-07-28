import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
const routes = [
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'shop',
		element: <Shop />,
	},
	{ path: 'cart', element: <Cart /> },
];
export default routes;
