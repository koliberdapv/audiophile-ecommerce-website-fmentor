import { Outlet } from 'react-router-dom';
import { Navbar, Footer, AsideNav, Cart } from '.';
import { useGlobalContext } from '../../context/context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SharedLayout = () => {
	const { isCartOpen, clickOutsideModal } = useGlobalContext();
	return (
		<>
			<Navbar />
			<ToastContainer position="center" />
			<dialog
				className="cart-modal"
				onClick={(e) => clickOutsideModal(e)}
			>
				<Cart isGlobalModule={true} />
			</dialog>
			<AsideNav />
			<Outlet />
			<Footer />
		</>
	);
};

export default SharedLayout;
