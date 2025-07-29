import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const PageLayout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-1 flex h-full">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default PageLayout;
