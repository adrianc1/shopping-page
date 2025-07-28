const Navbar = () => {
	return (
		<nav className="flex w-full border-rose-600 border-2 items-center justify-between px-6">
			<span>logo</span>
			<ul className="flex gap-4">
				<li>Home</li>
				<li>Shopping</li>
			</ul>
		</nav>
	);
};

export default Navbar;
