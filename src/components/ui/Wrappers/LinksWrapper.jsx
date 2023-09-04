import { styled } from 'styled-components';

const Wrapper = styled.div`
	.links-container {
		gap: 2.125rem;
	}
	a {
		color: var(--clr-white);
		transition: all 200ms ease-in;
	}
	a:hover {
		color: var(--clr-dark-orange);
	}
	.mobile-width {
		display: none;
	}
	@media screen and (width > 1000px) {
		.mobile-width {
			display: inline-block;
		}
	}
`;
export default Wrapper;
