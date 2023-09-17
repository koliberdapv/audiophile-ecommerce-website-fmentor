import styled from 'styled-components';
const Wrapper = styled.article`
	/* margin: 7.5rem 0 1rem; */
	color: var(--clr-white);
	.content-container {
		background-color: var(--clr-dark-orange);
		border-radius: var(--br-form);
		gap: 2rem;
		padding: 3.5rem 0;
		overflow: hidden;
		isolation: isolate;
		align-items: center;
		justify-items: center;
	}
	.img-container {
		width: 10.8rem;
		position: relative;
	}
	.pattern {
		position: absolute;
		inset: 0;
		transform: translateY(5%);
		scale: 3.25;
		z-index: -1;
	}
	header {
		text-align: center;
		gap: 1.5rem;
		padding: 0 1.5rem;
		justify-items: center;
	}
	.info {
		opacity: 0.75;
		max-width: 349px;
	}
	/* @media screen and (width > 768px) { */
	@media screen and (width > 600px) {
		.content-container {
			gap: 4rem;
		}
		.img-container {
			width: 12.3rem;
		}
		.pattern {
			scale: 4.7;
		}
		h2 {
			font-size: var(--fs-900);
			line-height: var(--line-height-h1);
			letter-spacing: var(--spacing-h1);
		}
		.info {
			margin-bottom: 1rem;
		}
	}
	@media screen and (width > 1000px) {
		/* margin: 10.5rem 0 1rem; */
		.content-container {
			grid-template-columns: auto auto;
			padding: 0;
			gap: 0;
		}
		.img-container {
			width: 25.6rem;
			padding: 6rem 0 0;
			margin-bottom: -0.75rem;
			margin-left: 4rem;
		}
		.pattern {
			scale: 2.5;
			transform: translateY(7rem);
		}
		header {
			text-align: left;
			justify-items: flex-start;
		}
	}
`;
export default Wrapper;
