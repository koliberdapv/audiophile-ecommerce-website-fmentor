import { Outlet } from 'react-router-dom';
import { Navbar, Footer, AsideNav, Cart } from '.';
import { useState } from 'react';

const SharedLayout = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const onClick = () => {
		const shadow = document.getElementById('sidebar-shadow');
		const shadowHeight = document.body.getBoundingClientRect().height - 84;
		shadow.style.height = `${shadowHeight}px`;
		setIsSidebarOpen(!isSidebarOpen);
	};
	return (
		<>
			<Navbar
				isSidebarOpen={isSidebarOpen}
				onClick={onClick}
			/>
			<Cart />
			<AsideNav
				isSidebarOpen={isSidebarOpen}
				onClick={onClick}
			/>
			{/* <Outlet /> */}
			<Footer />
		</>
	);
};

export default SharedLayout;
