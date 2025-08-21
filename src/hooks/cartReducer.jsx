export default function cartReducer(cart, action) {
	switch (action.type) {
		case 'added': {
			const addedProduct = { ...action.product, quantity: 1 };
			return [...cart, addedProduct];
		}
		case 'delete': {
			return cart.filter((p) => p.id !== action.id);
		}
		case 'increment': {
			return cart.map((p) => {
				return p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p;
			});
		}
		case 'decrement': {
			return cart
				.map((p) => {
					return p.id === action.id
						? { ...p, quantity: Math.max(0, p.quantity - 1) }
						: p;
				})
				.filter((p) => p.quantity > 0);
		}
		case 'update': {
			return cart.map((p) =>
				p.id === action.id ? { ...p, quantity: action.value } : p
			);
		}
		default: {
			throw Error('Unknown action' + action.type);
		}
	}
}
