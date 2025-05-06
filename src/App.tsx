import { AuthPage } from "@components/pages";
import { AuthProvider } from "@contexts";

function App() {
	return (
		<AuthProvider>
			<AuthPage/>
		</AuthProvider>
	);
}

export default App;
