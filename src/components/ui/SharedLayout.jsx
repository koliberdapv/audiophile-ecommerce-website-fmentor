import { Link, Outlet } from 'react-router-dom';
const SharedLayout = () => {
	return (
		<div>
			<h1>Shared layout</h1>
			<div className="flex column">
				<Link to="/category/headphones">headphones</Link>
				<Link to="/category/speakers">speakers</Link>
				<Link to="/category/earphones">earphones</Link>
			</div>
			<div className="container">
				<Outlet />
			</div>
		</div>
	);
};

export default SharedLayout;
