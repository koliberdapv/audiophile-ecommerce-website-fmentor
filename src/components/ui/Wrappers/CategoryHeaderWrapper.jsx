import styled from 'styled-components';
const Wrapper = styled.header`
	width: 100vw;
	display: grid;
	place-items: center;
	padding: 2rem 0;
	background-color: var(--clr-black-1);
	color: var(--clr-white);
	@media screen and (width < 600px) {
		h2 {
			font-size: var(--fs-600);
			letter-spacing: var(--spacing-h4);
			line-height: var(--line-height-h4);
		}
	}
	@media screen and (width > 600px) {
		padding: 6.56rem 0 6.06rem;
	}
`;
export default Wrapper;
