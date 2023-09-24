import styled from 'styled-components';
const Wrapper = styled.section`
	.product-specific-info {
		gap: 5.5rem;
	}
	@media screen and (width > 600px) {
		.product-specific-info {
			gap: 7.5rem;
		}
	}
	@media screen and (width > 1000px) {
		.product-specific-info {
			gap: 10rem;
		}
	}
`;
export default Wrapper;
