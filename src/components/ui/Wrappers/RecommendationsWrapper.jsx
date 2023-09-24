import styled from 'styled-components';
const Wrapper = styled.article`
	margin: 7.5rem 0;
	.content-container {
		gap: 2.5rem;
		text-align: center;
	}
	.recommendations {
		gap: 3.5rem;
	}
	.single-recommendation {
		gap: 2rem;
		justify-items: center;
		align-content: space-between;
	}
	.img-container img {
		border-radius: var(--br-form);
	}
	@media screen and (width < 600px) {
		h3 {
			font-size: var(--fs-500);
			letter-spacing: var(--spacing-h5);
			line-height: var(--line-height-h5);
		}
	}
	@media screen and (width > 600px) {
		.recommendations {
			grid-template-columns: 1fr 1fr 1fr;
			gap: 0.6875rem;
		}
		.single-recommendation {
			gap: 2.5rem;
		}
		.title {
			margin-bottom: -0.5rem;
		}
	}
	@media screen and (width > 1000px) {
		margin: 10rem 0;
		.content-container {
			gap: 4rem;
		}
		.recommendations {
			gap: 1.875rem;
		}
	}
`;
export default Wrapper;
