import { Outlet } from 'react-router-dom';
import { Navbar, Footer, AsideNav } from '.';
import { useState } from 'react';

const SharedLayout = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	return (
		<>
			<Navbar
				isSidebarOpen={isSidebarOpen}
				setIsSidebarOpen={setIsSidebarOpen}
			/>
			<AsideNav isSidebarOpen={isSidebarOpen} />
			<Outlet />
			<Footer />
		</>
	);
};

export default SharedLayout;
