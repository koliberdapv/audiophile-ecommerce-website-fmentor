import { styled } from 'styled-components';

const Wrapper = styled.header`
	background-color: var(--clr-black-1);
	overflow: hidden;
	.nav-container {
		padding: 1.5rem 0;
		position: relative;
		button {
			padding: 0.5rem;
			background-color: transparent;
		}
		.menu-btn {
			margin-left: -0.5rem;
		}

		.cart-btn {
			margin-right: -0.5rem;
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
	@media screen and (width > 600px) {
		.nav-container {
			gap: 2rem;
			justify-content: left;
		}
		.logo {
			margin-right: auto;
		}
		.nav-container::after {
			left: 0;
			width: 100%;
		}
	}
	@media screen and (width > 1000px) {
		.menu-btn {
			display: none;
		}
		.cart-btn {
			margin-left: auto;
		}
		.mobile-width {
			display: inline-block;
			margin-left: -7rem;
		}
	}
	.cart-btn {
		position: relative;
	}
	.cart-btn-count {
		position: absolute;
		top: -25%;
		right: -25%;
		background-color: var(--clr-dark-orange);
		color: white;
		width: 1.5rem;
		width: 1.25rem;
		aspect-ratio: 1/1;
		border-radius: 50%;
		display: grid;
		place-items: center;
		font-size: var(--fs-300);
		font-weight: var(--fw-700);
	}
`;
export default Wrapper;
