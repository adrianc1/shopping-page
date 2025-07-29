import ViewCartBtn from './ViewCartBtn';

const Navbar = () => {
	return (
		<nav className="flex w-full items-center justify-between px-6 py-6">
			<span>logo</span>
			<ul className="flex gap-4 items-center justify-center">
				<li>Home</li>
				<li>Shopping</li>
				<ViewCartBtn />
			</ul>
		</nav>
	);
};

export default Navbar;
