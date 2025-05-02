import { HomePage, MenuPage } from "@components/pages";
import { CartProvider } from "@contexts";

const App = () => {
	return (
		<CartProvider>
			{/* <MenuPage/> */}
			<HomePage/>
		</CartProvider>
	);
}

export default App;
