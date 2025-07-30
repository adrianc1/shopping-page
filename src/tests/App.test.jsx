import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormattedPrice from '../components/FormattedPrice';

const prices = [{ price1: 100 }, { price2: 100.1 }, { price3: 100.11 }];

describe('App component', () => {
	it('adds decimal point and trailing zeroes to number', () => {
		const { container } = render(<App />);
		expect(container).toMatchSnapshot();
	});

	it('renders radical rhinos after button click', async () => {
		const user = userEvent.setup();

		render(<App />);
		const button = screen.getByRole('button', { name: 'Click Me' });

		await user.click(button);

		expect(screen.getByRole('heading').textContent).toMatch(/radical rhinos/i);
	});
});
