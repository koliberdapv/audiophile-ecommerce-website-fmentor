import styled from 'styled-components';

const Wrapper = styled.footer`
	background-color: var(--clr-black-1);
	.footer-container {
		position: relative;
		flex-direction: column;
		padding: 3rem 0 2.375rem;
		gap: 3rem;
		text-align: center;
	}
	.text {
		color: var(--clr-white);
		opacity: 0.5;
	}
	.date {
		font-weight: var(--fw-700);
	}
	.orange-line {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 101px;
		height: 4px;
		background-color: var(--clr-dark-orange);
	}
	.date-socials {
		gap: 3rem;
	}
	@media screen and (width > 767px) {
		.footer-container {
			text-align: left;
		}
		.orange-line {
			left: 0;
			transform: translateX(0);
		}
		.logo {
			justify-content: flex-start;
		}
		.date-socials {
			justify-content: space-between;
		}
	}
	@media screen and (width > 1200px) {
		.footer-container {
			grid-template-columns: auto auto;
			justify-content: space-between;
		}
		.info {
			grid-column: span 2;
			max-width: 33.75rem;
		}
		.date-socials {
			grid-column: span 2;
			article {
				transform: translateY(-5.5rem);
			}
		}
	}
`;
export default Wrapper;
