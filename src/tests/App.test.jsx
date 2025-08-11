import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomePage from '../pages/HomePage.jsx';
import { BrowserRouter } from 'react-router-dom';
import FormattedPrice from '../components/FormattedPrice';
import ShopPage from '../pages/ShopPage.jsx';

const prices = [5, 5.2, 5.33];

describe('Formatted Price', () => {
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
