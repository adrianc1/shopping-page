import { useState } from 'react';
export function useCounter(initialValue = 1) {
	const [count, setCount] = useState(initialValue);

	const increment = (e) => {
		e.preventDefault();
		setCount((prev) => prev + 1);
	};
	const decrement = (e) => {
		e.preventDefault();
		count !== 0 ? setCount((prev) => prev - 1) : 0;
	};

	const handleQuantityChange = (e) => {
		setCount(e.target.value);
	};

	return { count, increment, decrement, handleQuantityChange };
}
