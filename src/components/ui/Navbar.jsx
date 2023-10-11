import cart from '../../assets/shared/mobile/cart.svg';
import hamburger from '../../assets/shared/mobile/hamburger.svg';
import Wrapper from './Wrappers/NavbarWrapper';
import { Links, Logo } from './';
import { useGlobalContext } from '../../context/context';
const Navbar = () => {
  const { toggleSidebarOpen, toggleCartOpen } = useGlobalContext();
  return (
    <Wrapper>
      <div className="width-controller">
        <nav className="nav-container | flex align-center justify-space">
          <button className="menu-btn" onClick={toggleSidebarOpen}>
            <figure className="grid center">
              <img src={hamburger} alt="menu" />
            </figure>
          </button>
          <Logo />
          <Links mobile={true} />
          <button className="cart-btn" onClick={toggleCartOpen}>
            <figure className="grid center">
              <img src={cart} alt="cart" />
            </figure>
          </button>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Navbar;
