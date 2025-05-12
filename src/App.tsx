import { MenuPage } from "@components/pages";
import { CartProvider } from "@contexts";

const App = () => {
	return (
		<CartProvider>
			<MenuPage/>
		</CartProvider>
	);
}

export default App;
