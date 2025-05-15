// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import { AuthProvider } from '@contexts';

createRoot(document.getElementById('root')!).render(
	<AuthProvider>
		<App/>
	</AuthProvider>
	
);
