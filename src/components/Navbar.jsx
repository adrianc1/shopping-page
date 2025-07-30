import ViewCartBtn from './ViewCartBtn';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="flex w-full items-center justify-between px-6 py-6 text-primary font-bold bg-[#d7c19b]">
			<span>logo</span>
			<ul className="flex gap-4 items-center justify-center">
				<NavLink to="/">
					<li>Home</li>
				</NavLink>
				<NavLink to="shop">
					<li>Shopping</li>
				</NavLink>
				<ViewCartBtn />
			</ul>
		</nav>
	);
};

export default Navbar;
