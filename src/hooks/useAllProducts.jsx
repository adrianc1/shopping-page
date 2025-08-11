import { useState, useEffect } from 'react';

const useAllProducts = () => {
	const [allProducts, setAllProducts] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products', { mode: 'cors' })
			.then((response) => {
				if (response.status >= 400) {
					throw new Error('server error');
				}
				return response.json();
			})
			.then((response) => {
				setAllProducts(response);
				console.log(response);
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, []);

	return { allProducts, error, loading };
};

export default useAllProducts;
