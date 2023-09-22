import styled from 'styled-components';
const Wrapper = styled.section`
	margin: 5rem 0;
	.content-container {
		gap: 5.5rem;
	}
	.features,
	.box-kit,
	.kit-item,
	.text-container {
		gap: 1.5rem;
	}
	.text-container,
	.equipment-name {
		opacity: 0.5;
	}
	.items-list {
		gap: 0.5rem;
	}
	.kit-item {
		grid-template-columns: 15px 1fr;
		align-items: center;
	}
	.quantity {
		color: var(--clr-dark-orange);
		font-weight: var(--fw-700);
	}
	.equipment-name {
		text-transform: capitalize;
	}
	@media screen and (width < 600px) {
		h3 {
			font-size: var(--fs-500);
			letter-spacing: var(--spacing-h5-small);
		}
	}
	@media screen and (width > 600px) {
		.box-kit {
			grid-template-columns: 1fr 1fr;
		}
		.features,
		.box-kit,
		.text-container {
			gap: 2rem;
		}
	}
	@media screen and (width > 1000px) {
		.box-kit {
			grid-template-columns: 1fr;
			align-self: flex-start;
		}
		.content-container {
			grid-template-columns: minmax(auto, max-content) max-content;
			gap: 7.8125rem;
		}
		.features {
			max-width: 633px;
		}
	}
`;
export default Wrapper;
