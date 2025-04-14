import MenuPage from "@components/pages/MenuPage/MenuPage";
import { CartProvider } from "@contexts";
import React from "react";

class App extends React.Component {
	render(): React.ReactNode {
		return (
			<CartProvider>
				<MenuPage/>
			</CartProvider>
		);
	}
}

export default App;
