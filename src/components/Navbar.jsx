import ViewCartBtn from './ViewCartBtn';
import { NavLink } from 'react-router-dom';

const Navbar = ({ cart }) => {
	console.log();
	return (
		<nav className="flex w-full items-center justify-between px-6 py-6 text-primary font-bold bg-[#fff3e0]">
			<span>logo</span>
			<ul className="flex gap-4 items-center justify-center">
				<NavLink to="/">
					<li>Home</li>
				</NavLink>
				<NavLink to="shop">
					<li>Shopping</li>
				</NavLink>
				<ViewCartBtn cart={cart.length} />
			</ul>
		</nav>
	);
};

export default Navbar;
