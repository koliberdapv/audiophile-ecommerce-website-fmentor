import { Outlet } from 'react-router-dom';
import { Navbar, Footer, AsideNav, Cart } from '.';
import { useGlobalContext } from '../../context/context';

const SharedLayout = () => {
  const { isCartOpen } = useGlobalContext();
  return (
    <>
      <Navbar />
      {isCartOpen && <Cart isGlobalModule={true} />}
      <AsideNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
