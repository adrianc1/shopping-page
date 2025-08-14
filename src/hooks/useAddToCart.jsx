import { useState } from 'react';
export function useAddToCart() {
	const [cartArray, setCartArray] = useState([]);

	return { cartArray, setCartArray };
}
