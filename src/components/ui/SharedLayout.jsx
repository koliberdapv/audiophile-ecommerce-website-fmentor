import { Outlet } from 'react-router-dom';
import { Navbar, Footer, AsideNav, Cart } from '.';
import { useGlobalContext } from '../../context/context';

const SharedLayout = () => {
  const { isCartOpen, clickOutsideModal } = useGlobalContext();
  return (
    <>
      <Navbar />
      <dialog className="cart-modal" onClick={(e) => clickOutsideModal(e)}>
        <Cart isGlobalModule={true} />
      </dialog>
      <AsideNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
