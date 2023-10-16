import styled from 'styled-components';
const Wrapper = styled.section`
	background-color: var(--clr-light-gray);
	padding: 2rem 0;
	.global-container {
		gap: 2rem;
	}
	@media screen and (width > 1000px) {
		.global-container {
			grid-template-columns: 1fr 350px;
		}
	}
`;
export default Wrapper;
