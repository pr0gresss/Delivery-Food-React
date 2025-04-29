import MenuPage from "@components/pages/MenuPage/MenuPage";
import { CartProvider } from "@contexts";

const App = () => {
	return (
		<CartProvider>
			<MenuPage/>
		</CartProvider>
	);
}

export default App;
