import styled from 'styled-components';

const Wrapper = styled.main`
	color: var(--clr-white);
	background-color: transparent;
	background-color: var(--clr-black-1);
	overflow: hidden;
	position: relative;
	.home-container {
		isolation: isolate;
		text-align: center;
		padding: 8.5rem 0;
		justify-items: center;
	}
	h1 {
		font-size: 2.25rem;
		line-height: var(--line-height-h3);
	}
	header {
		margin: 1rem 0 1.5rem;
		max-width: 396px;
		margin-inline: auto;
	}
	.info {
		margin-bottom: 1.75rem;
		max-width: 333px;
		margin-inline: auto;
		opacity: 0.75;
	}
	.background-img {
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100vw;
	}
	.background-img img {
		width: 100%;
		height: 100%;
	}
	.overline {
		opacity: 0.5;
		color: var(--clr-white);
	}
	@media screen and (width > 600px) {
		.background-img {
			top: 48%;
		}
	}
	@media screen and (width > 767px) {
		.background-img {
			top: 45%;
		}
		.home-container {
			padding: 10rem 0;
		}
		h1 {
			font-size: var(--fs-900);
			line-height: var(--line-height-h1);
		}
		.info {
			max-width: 349px;
		}
	}
	[data-resolution='tablet-hero'] {
		display: none;
	}
	[data-resolution='desktop-hero'] {
		display: none;
	}
	@media screen and (width > 600px) {
		[data-resolution='mobile-hero'] {
			display: none;
		}
		[data-resolution='tablet-hero'] {
			display: block;
		}
	}
	@media screen and (width > 1200px) {
		[data-resolution='tablet-hero'] {
			display: none;
		}
		[data-resolution='desktop-hero'] {
			display: block;
		}
	}
	@media screen and (width > 1200px) {
		.background-img {
			top: 50%;
		}
		.home-container {
			padding: 9rem 0;
			text-align: left;
			justify-items: left;
		}
		.info,
		header {
			margin-inline: 0;
		}
	}
`;
export default Wrapper;
