import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomePage from '../pages/HomePage.jsx';
import { BrowserRouter } from 'react-router-dom';
import FormattedPrice from '../components/FormattedPrice';
import ShopPage from '../pages/ShopPage.jsx';

describe('App component', () => {
	// it('adds decimal point and trailing zeroes to number', () => {
	// 	const { container } = render(<FormattedPrice />);
	// 	expect(container).toMatchSnapshot();
	// });

	it('renders shop now button on home page', () => {
		render(
			<BrowserRouter>
				<HomePage />
			</BrowserRouter>
		);
		expect(screen.getByText('Shop Now')).toBeInTheDocument();
	});

	it('Goes to shop page on button click', async () => {
		const user = userEvent.setup();

		render(
			<BrowserRouter>
				<HomePage />
			</BrowserRouter>
		);
		const button = screen.getByRole('button');

		await user.click(button);

		expect(screen.getByRole('heading').textContent).toMatch(
			/Shop Your Favorite Items/i
		);
	});
});
