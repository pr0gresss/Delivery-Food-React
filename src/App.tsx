import { HomePage } from "@components/pages";
import { CartProvider } from "@contexts";

const App = () => {
	return (
		<CartProvider>
			<HomePage/>
		</CartProvider>
	);
}

export default App;
