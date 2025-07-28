import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const PageLayout = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-1 flex h-full">{children}</main>
			<Footer />
		</div>
	);
};

export default PageLayout;
