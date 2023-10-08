import { Outlet } from 'react-router-dom';
import { Navbar, Footer, AsideNav, Cart } from '.';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      {/* <Cart /> */}
      <AsideNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
