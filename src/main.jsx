import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/routes.jsx';
import './index.css';
import App from './App';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
