import { useState, useEffect } from 'react';

const useSingleProduct = (id) => {
	const [product, setProduct] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`, { mode: 'cors' })
			.then((response) => {
				if (response.status >= 400) {
					throw new Error('server error');
				}
				return response.json();
			})
			.then((response) => setProduct(response))
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, [id]);

	return { product, error, loading };
};

export default useSingleProduct;
