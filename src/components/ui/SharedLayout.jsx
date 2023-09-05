import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '.';
const SharedLayout = () => {
	return (
		<>
			<Navbar />
			<h1>Shared layout</h1>
			<div>
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default SharedLayout;
