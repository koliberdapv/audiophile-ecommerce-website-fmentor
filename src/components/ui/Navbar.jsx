import logo from '../../assets/shared/mobile/logo.svg';
import cart from '../../assets/shared/mobile/cart.svg';
import hamburger from '../../assets/shared/mobile/hamburger.svg';
import Wrapper from './Wrappers/NavbarWrapper';
import Links from './Links';
const Navbar = () => {
	return (
		<Wrapper>
			<div className="width-controller">
				<section className="nav-container | flex align-center justify-space">
					<button className="menu-btn">
						<figure className="grid center">
							<img
								src={hamburger}
								alt="menu"
							/>
						</figure>
					</button>
					<figure className="logo | grid center">
						<img
							src={logo}
							alt="audiophile"
						/>
					</figure>
					<Links mobile={true} />
					<button className="cart-btn">
						<figure className="grid center">
							<img
								src={cart}
								alt="cart"
							/>
						</figure>
					</button>
				</section>
			</div>
		</Wrapper>
	);
};

export default Navbar;
