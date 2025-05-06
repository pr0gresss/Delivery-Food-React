import { Footer, Header } from '@components/organisms';
import React from 'react';

const MainTemplate: React.FC<React.PropsWithChildren> = ({ children }) => {

	return (
		<>
			<Header/>
			{children}
			<Footer />
		</>
	);
};

export default MainTemplate;
