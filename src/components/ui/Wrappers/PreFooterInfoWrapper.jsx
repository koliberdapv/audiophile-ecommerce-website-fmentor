import styled from 'styled-components';
const Wrapper = styled.article`
	.img-container {
		border-radius: var(--br-form);
		overflow: hidden;
	}
	span {
		color: var(--clr-dark-orange);
		transition: none;
	}
	header {
		text-align: center;
		justify-content: center;
		gap: 2rem;
	}
	p {
		opacity: 0.5;
	}
	.content-container {
		gap: 2.5rem;
		margin: 7.5rem 0;
	}
	@media screen and (width < 600px) {
		h2 {
			font-size: var(--fs-600);
			line-height: var(--line-hight-h4);
		}
	}
	@media screen and (width > 600px) {
		h2,
		p {
			max-width: 35.8rem;
		}
		.content-container {
			gap: 3.9375rem;
		}
		.homepage-margin {
			margin: 6rem 0;
		}
	}
	@media screen and (width > 1000px) {
		.content-container {
			grid-template-columns: 1fr 1fr;
			gap: 1.875rem;
			margin: 10rem 0;
		}
		.img-container {
			order: 2;
		}
		header {
			text-align: left;
			align-content: center;
			justify-content: flex-start;
		}
		h2,
		p {
			max-width: 27.8rem;
		}
		.homepage-margin {
			margin: 12.5rem 0;
		}
	}
	@media screen and (width > 1000px) {
		[data-resolution='tablet'] {
			display: none;
		}
		[data-resolution='desktop'] {
			display: block;
		}
	}
`;
export default Wrapper;
