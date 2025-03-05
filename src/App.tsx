import ItemList from './app/components/ItemList';

const items = ['Item 1', 'Item 2', 'Item 3'];

function App() {
	return (
		<div>
			<h1>My Item List</h1>
			<ItemList items={items} />
		</div>
	);
}

export default App;
