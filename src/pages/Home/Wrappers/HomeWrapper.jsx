import styled from 'styled-components';

const Wrapper = styled.section`
	.promos {
		gap: 1.5rem;
	}
	@media screen and (width > 600px) {
		.promos {
			gap: 2rem;
		}
	}
	@media screen and (width > 1000px) {
		.promos {
			gap: 3rem;
		}
	}
`;
export default Wrapper;
