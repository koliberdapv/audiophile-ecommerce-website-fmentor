import styled from 'styled-components';
const Wrapper = styled.section`
	.title {
		font-weight: var(--fw-700);
		letter-spacing: var(--spacing-subtitle);
		text-transform: uppercase;
		color: var(--clr-black-1);
	}
	.img-container {
		width: 85px;
		margin-inline: auto;
		isolation: isolate;
		position: relative;
	}
	.img-container img {
		width: 100%;
		margin-bottom: 2.25rem;
	}
	.img-container::before {
		position: absolute;
		content: '';
		bottom: 1.5rem;
		left: -10%;
		width: 120%;
		height: 1rem;
		background-color: var(--clr-black-1);
		filter: blur(22px);
		box-shadow: var(--shadow-4);
		z-index: -1;
		border-radius: 50%;
	}
	.category-container {
		gap: 1.5rem;
		margin: 3rem 0;
		grid-template-columns: 100%;
	}
	.category {
		text-align: center;
		padding-bottom: 0.5rem;
		isolation: isolate;
		position: relative;
		align-content: flex-end;
	}
	.category::before {
		position: absolute;
		content: '';
		inset: 25% 0 0 0;
		background-color: var(--clr-counter-bg);
		z-index: -2;
		border-radius: var(--br-form);
	}
	.earphones-img {
		scale: 1.5;
	}
	@media screen and (width > 768px) {
		.category-container {
			gap: 0.625rem;
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media screen and (width > 1200px) {
		.title {
			font-size: var(--fs-400);
			letter-spacing: var(--spacing-h6);
		}
		.img-container {
			width: 10rem;
		}
		.category {
			grid-template-columns: auto;
		}
		.earphones-img {
			transform: translateY(-17.5%);
		}
		.category-container {
			gap: 1.875rem;
		}
	}
`;
export default Wrapper;
