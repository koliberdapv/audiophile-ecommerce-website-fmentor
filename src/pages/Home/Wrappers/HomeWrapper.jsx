import styled from 'styled-components';

const Wrapper = styled.section`
	.page-content {
		/* margin: 2.5rem 0 0; */
		/* gap: 7.5rem; */
	}
	.promos {
		gap: 1.5rem;
	}
	@media screen and (width > 600px) {
		.page-content {
			/* margin: 6rem 0; */
			/* gap: 6rem; */
		}
		.promos {
			gap: 2rem;
		}
	}
	@media screen and (width > 1000px) {
		.page-content {
			/* margin: 7.96rem 0 12.5rem; */
			/* gap: 0; */
		}
		.promos {
			gap: 3rem;
			/* margin: 10.5rem 0 12.5rem; */
		}
	}
`;
export default Wrapper;
