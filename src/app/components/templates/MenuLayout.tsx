import { Footer, Header } from '@components/organisms';
import React from 'react';

const MenuLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default MenuLayout;
