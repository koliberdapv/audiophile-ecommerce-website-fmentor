import styled from 'styled-components';
const Wrapper = styled.section`
	.products {
		margin: 4rem 0 7.5rem;
		gap: 7.5rem;
	}
	@media screen and (width > 600px) {
		.products {
			margin: 7.5rem 0;
		}
	}
	@media screen and (width > 1000px) {
		.products {
			margin: 10rem 0;
			gap: 10rem;
		}
	}
`;
export default Wrapper;
