import ViewCartBtn from './ViewCartBtn';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="flex w-full items-center justify-between px-6 py-6 text-primary font-bold">
			<span>logo</span>
			<ul className="flex gap-4 items-center justify-center">
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="shop">
					<li>Shopping</li>
				</Link>
				<ViewCartBtn />
			</ul>
		</nav>
	);
};

export default Navbar;
