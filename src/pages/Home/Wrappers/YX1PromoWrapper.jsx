import styled from 'styled-components';
const Wrapper = styled.article`
	.content-container {
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}
	.img-container {
		border-radius: var(--br-form);
		overflow: hidden;
	}
	.img-container,
	header {
		aspect-ratio: 1/0.611;
	}
	header {
		padding: 2.5rem 0 2.5rem 1.5rem;
		align-content: center;
		gap: 2rem;
		border-radius: var(--br-form);
		background-color: var(--clr-counter-bg);
	}
	@media screen and (width < 300px) {
		header {
			aspect-ratio: 0;
		}
	}
	@media screen and (width > 600px) {
		.content-container {
			grid-template-columns: 1fr 1fr;
			gap: 0.68rem;
		}
		header {
			padding: 2.5rem 1rem 2.5rem 2.5rem;
		}
		.img-container,
		header {
			aspect-ratio: 1/0.94;
		}
	}
	@media screen and (width > 1000px) {
		[data-resolution='tablet'] {
			display: none;
		}
		[data-resolution='desktop'] {
			display: block;
		}
		.img-container,
		header {
			aspect-ratio: 1/0.592;
		}
		header {
			padding: 2.5rem 5.93rem;
		}
		.content-container {
			gap: 1.875rem;
		}
	}
`;
export default Wrapper;
