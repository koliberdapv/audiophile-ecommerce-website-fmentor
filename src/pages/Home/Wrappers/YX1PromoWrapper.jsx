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
	header {
		/* padding: 2.5rem 0 2.5rem 1.5rem; */
		padding: 0 1.5rem;
		align-content: center;
		gap: 2rem;
		border-radius: var(--br-form);
		background-color: var(--clr-counter-bg);
		min-height: 12.5rem;
	}
	@media screen and (width > 380px) {
		.img-container,
		header {
			aspect-ratio: 1/0.611;
			/* padding: 0; */
			min-height: unset;
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
