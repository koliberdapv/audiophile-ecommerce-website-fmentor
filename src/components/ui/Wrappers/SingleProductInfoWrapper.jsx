import styled from 'styled-components';
const Wrapper = styled.main`
	margin: 5rem 0;
	.content-container {
		gap: 2rem;
	}
	.product-info {
		text-align: left;
		gap: 1.5rem;
	}
	.text {
		opacity: 0.5;
	}
	h1 {
		max-width: 20rem;
		font-size: var(--fs-600);
		letter-spacing: var(--spacing-subtitle);
		line-height: var(--line-height-h4);
	}
	.text {
		max-width: 27.81rem;
	}
	.img-container img {
		border-radius: var(--br-form);
	}

	@media screen and (width > 600px) {
		.content-container {
			grid-template-columns: 41% 1fr;
			gap: 4.34rem;
		}
		.product-info {
			align-content: center;
		}
		h1 {
			margin-top: -0.5rem;
			margin-bottom: 0.5rem;
		}
	}
	@media screen and (width > 600px) {
		.overline {
			font-size: var(--fs-100);
			letter-spacing: var(--spacing-overline-small);
		}
	}
	@media screen and (width > 1000px) {
		.content-container {
			gap: 7.81rem;
			grid-template-columns: 1fr 1fr;
			grid-template-columns: 48% 1fr;
		}
		.product-info {
			text-align: left;
			align-content: center;
		}
		.overline {
			font-size: var(--fs-300);
			letter-spacing: var(--spacing-overline);
		}
		h1 {
			font-size: var(--fs-800);
			letter-spacing: var(--spacing-h2);
			line-height: var(--line-height-h2);
		}
	}
`;
export default Wrapper;
