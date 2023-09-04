import { styled } from 'styled-components';

const Wrapper = styled.nav`
	background-color: var(--clr-black-1);
	overflow: hidden;
	.width-controller {
		padding: 0 1rem;
	}
	.nav-container {
		padding: 1.5rem 0;
		position: relative;
		button {
			padding: 0.5rem;
			background-color: transparent;
		}
	}
	.nav-container::after {
		content: ' ';
		position: absolute;
		width: 200%;
		height: 1px;
		background-color: white;
		z-index: 1;
		bottom: 0;
		left: -50%;
		opacity: 0.104;
	}
	.mobile-width {
		display: none;
	}
	@media screen and (width > 767px) {
		.width-controller {
			padding: 0 2rem;
			max-width: calc(1110px + 4rem);
			margin-inline: auto;
		}
		.nav-container {
			gap: 2rem;
			padding: 1.5rem 0;
		}
		.logo {
			margin-right: auto;
		}
		.nav-container::after {
			left: 0;
			width: 100%;
		}
	}
	@media screen and (width > 1200px) {
		.menu-btn {
			display: none;
		}
		.cart-btn {
			margin-left: auto;
		}
		.mobile-width {
			display: inline-block;
		}
	}
`;
export default Wrapper;
