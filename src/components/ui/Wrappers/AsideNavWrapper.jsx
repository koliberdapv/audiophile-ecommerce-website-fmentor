import { styled } from 'styled-components';

const Wrapper = styled.aside`
	position: sticky;
	position: fixed;
	top: 84px;
	left: 0;
	width: 100%;
	height: auto;
	z-index: 1;
	.categories-sidebar {
		background-color: white;
		border-radius: 0 0 var(--br-form) var(--br-form);
		background-color: white;
		padding: 2rem 0;
	}
	.categories-sidebar::before {
		position: absolute;
		content: '';
		width: 100vw;
		height: 400rem;
		height: 100vh;
		background-color: hsl(0, 0%, 0%, 0.5);
		z-index: -1;
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
