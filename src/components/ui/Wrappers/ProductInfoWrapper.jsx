import styled from 'styled-components';
const Wrapper = styled.section`
	.content-container {
		gap: 2rem;
	}
	.product-info {
		place-items: center;
		text-align: center;
		gap: 1.5rem;
	}
	.text {
		opacity: 0.5;
	}
	h2 {
		max-width: 20rem;
	}
	.text {
		max-width: 35.75rem;
	}
	.img-container img {
		border-radius: var(--br-form);
	}
	@media screen and (width < 600px) {
		h2 {
			font-size: var(--fs-600);
			letter-spacing: var(--spacing-h4);
			line-height: var(--line-height-h4);
		}
	}
	@media screen and (width > 600px) {
		.content-container {
			gap: 3.25rem;
		}
		h2 {
			margin-top: -0.5rem;
			margin-bottom: 0.5rem;
		}
	}
	@media screen and (width > 1000px) {
		.inverted .product-info {
			order: -1;
		}
		.content-container {
			gap: 7.81rem;
			grid-template-columns: 1fr 1fr;
		}
		.product-info {
			text-align: left;
			place-items: unset;
			align-content: center;
		}
	}
`;
export default Wrapper;
