import { useState } from 'react';
import Home from './pages/Home';
import PageLayout from './layouts/PageLayout';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

const App = () => {
	return (
		<PageLayout>
			<Home />
		</PageLayout>
	);
};

export default App;
