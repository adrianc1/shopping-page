import { useState } from 'react';

const App = () => {
	const [heading, setHeading] = useState('Magnificent Monkeys');

	const clickHandler = () => {
		setHeading('Radical Rhinos');
	};

	return (
		<>
			<button type="button" onClick={clickHandler}>
				Click Me
			</button>
			<h1>{heading}</h1>
		</>
	);
};

export default App;

//   const fetchDataForPosts = async () => {
//       try {
//         const response = await fetch(
//           `https://jsonplaceholder.typicode.com/posts?_limit=8`
//         );
//         if (!response.ok) {
//           throw new Error(`HTTP error: Status ${response.status}`);
//         }
//         let postsData = await response.json();
//         setData(postsData);
//         setError(null);
//       } catch (err) {
//         setError(err.message);
//         setData(null);
//       } finally {
//         setLoading(false);
//       }
//     };
