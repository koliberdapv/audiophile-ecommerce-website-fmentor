import styled from 'styled-components';
const Wrapper = styled.article`
	margin-bottom: 1rem;
	.content-container {
		border-radius: var(--br-form);
		overflow: hidden;
		grid-area: stack;
		align-items: center;
	}
	.img-container {
		grid-area: stack2;
	}
	header {
		grid-area: stack2;
		padding: 0 1.5rem;
		gap: 2rem;
	}
	@media screen and (width > 600px) {
		header {
			padding: 0 3.875rem;
		}
	}
	@media screen and (width > 770px) {
		[data-resolution='tablet'] {
			display: none;
		}
		[data-resolution='desktop'] {
			display: block;
		}
		header {
			padding: 0 6rem;
		}
	}
`;
export default Wrapper;
