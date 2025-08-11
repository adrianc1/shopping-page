import { useState } from 'react';

const QuantityIncrement = () => {
	const [count, setCount] = useState(1);

	function handleQuantityIncrease(e) {
		e.preventDefault();
		setCount((prev) => prev + 1);
	}

	function handleQuantityDecrease(e) {
		e.preventDefault();
		count !== 0 ? setCount((prev) => prev - 1) : 0;
	}
	return (
		<form className="flex flex-col justify-center items-center gap-2">
			<div className="flex gap-2">
				<button
					className="decrease bg-green-600 h-6 w-6 rounded-full text-white"
					onClick={handleQuantityDecrease}
				>
					-
				</button>
				<input
					type="number"
					name="quantity "
					value={count}
					onChange={handleQuantityIncrease}
					className="w-[30px] border text-center"
				/>
				<button
					className="increase bg-green-600 h-6 w-6 rounded-full text-white"
					onClick={handleQuantityIncrease}
				>
					+
				</button>
			</div>
			<button className="bg-green-600 rounded-2xl px-4 py-1 text-white">
				Add To Cart
			</button>
		</form>
	);
};

export default QuantityIncrement;
