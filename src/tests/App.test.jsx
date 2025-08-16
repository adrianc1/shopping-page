import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomePage from '../pages/HomePage.jsx';
import { BrowserRouter } from 'react-router-dom';
import FormattedPrice from '../components/FormattedPrice';
import ShopPage from '../pages/ShopPage.jsx';
import QuantityIncrement from '../components/QuantityIncrement.jsx';

vi.mock('react-router-dom', async (importOriginal) => {
	const actual = await importOriginal();
	return {
		...actual,
		useOutletContext: () => ({
			cart: [{ id: 1, quantity: 2 }],
			incrementQuantity: vi.fn(),
			decrementQuantity: vi.fn(),
			handleUpdateQuantity: vi.fn(),
		}),
	};
});

describe('increment quantity', () => {
	const itemID = 1;
	const product = { id: 1, quantity: 0 };
	render(<QuantityIncrement itemID={itemID} product={product} />);
	it('renders increment, decrement buttons, and input', () => {
		screen.getByText('-');
	});
	it('adds 1 unit to the quantity', () => {});
	it('subtracts 1 unit to the quantity', () => {});
});

describe('Formatted Price', () => {
	const prices = [5, 5.2, 5.33];

	it('adds decimal point and trailing zeroes to a whole number', () => {
		render(<FormattedPrice price={prices[0]} />);
		expect(screen.getByText('$5.00')).toBeInTheDocument();
	});
	it('adds trailing zero', () => {
		render(<FormattedPrice price={prices[1]} />);
		expect(screen.getByText('$5.20')).toBeInTheDocument();
	});
	it('leaves properly formatted prices as is', () => {
		render(<FormattedPrice price={prices[2]} />);
		expect(screen.getByText('$5.33')).toBeInTheDocument();
	});
});

describe('page navigation', () => {
	it('renders shop now button on home page', () => {
		render(
			<BrowserRouter>
				<HomePage />
			</BrowserRouter>
		);
		expect(screen.getByText('Shop Now')).toBeInTheDocument();
	});

	it('Goes to shop page on button click', async () => {
		render(
			<BrowserRouter>
				<ShopPage />
			</BrowserRouter>
		);
		expect(screen.getByText('Shop Your Favorite Items')).toBeInTheDocument();
	});
});
