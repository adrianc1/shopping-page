import { useCounter } from '../hooks/useCounter';

const QuantityIncrement = () => {
	const { count, increment, decrement, handleQuantityChange } = useCounter();
	return (
		<form className="flex flex-col justify-center items-center gap-2">
			<div className="flex gap-2">
				<button
					className="decrease bg-green-600 h-6 w-6 rounded-full text-white"
					onClick={decrement}
				>
					-
				</button>
				<input
					type="number"
					name="quantity "
					value={count}
					onChange={handleQuantityChange}
					className="w-[30px] border text-center"
				/>
				<button
					className="increase bg-green-600 h-6 w-6 rounded-full text-white"
					onClick={increment}
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
