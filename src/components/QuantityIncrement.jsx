const QuantityIncrement = () => {
	return (
		<form className="flex flex-col justify-center items-center gap-2">
			<div className="flex gap-2">
				<button className="decrease bg-green-600 h-6 w-6 rounded-full text-white">
					-
				</button>
				<input
					type="number"
					name="quantity "
					className="w-[30px] border text-center"
				/>
				<button className="increase bg-green-600 h-6 w-6 rounded-full text-white">
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
