import { styled } from 'styled-components';

const Wrapper = styled.aside`
	position: absolute;
	top: 84px;
	left: 0;
	width: 100%;
	height: auto;
	z-index: 1;
	transform: translateX(-100%);
	opacity: 0.4;
	transition: transform 250ms ease-in, opacity 50ms ease-in;
	.categories-sidebar {
		background-color: white;
		border-radius: 0 0 var(--br-form) var(--br-form);
		background-color: white;
		padding: 2rem 0;
	}
	.sidebar-shadow {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 100vw;
		height: 500vh;
		background-color: black;
		z-index: -1;
		cursor: unset;
		opacity: 0;
	}
	@media screen and (width > 600px) {
		.categories-sidebar {
			padding: 3.5rem 0 4.1875rem;
		}
	}
	@media screen and (width > 1000px) {
		display: none;
	}
`;
export default Wrapper;
