import { useState } from 'react';
export function useCounter(initialValue = 1) {
	const [count, setCount] = useState(initialValue);

	const increment = (e) => {
		e.preventDefault();
		setCount((prev) => prev + 1);
	};
	const decrement = (e) => {
		e.preventDefault();
		setCount((prev) => prev - 1);
	};

	const handleQuantityChange = (e) => {
		setCount(e.target.value);
	};

	return { count, increment, decrement, handleQuantityChange };
}
