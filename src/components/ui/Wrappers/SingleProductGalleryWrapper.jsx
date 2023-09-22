import styled from 'styled-components';
const Wrapper = styled.section`
	margin: 5rem 0;
	.content-container {
		gap: 1.25rem;
	}
	.img-container img {
		border-radius: var(--br-form);
		overflow: hidden;
	}
	@media screen and (width > 600px) {
		.content-container {
			grid-template-columns: 40% 57%;
			grid-template-rows: repeat(2, 47.28%);
			justify-content: space-between;
			align-content: space-between;
			gap: 0;
		}
		.img-container:nth-child(2) {
			order: 1;
		}
		.img-container:nth-child(3) {
			grid-area: span 2;
		}
	}
`;
export default Wrapper;
