import styled from 'styled-components';
const Wrapper = styled.section`
	.content-container {
		background-color: white;
		border-radius: var(--br-form);
		padding: 2rem 1.5rem;
		row-gap: 2rem;
	}
	.form {
		gap: 2rem;
	}
	.subtitle {
		color: var(--clr-dark-orange);
		margin: 2rem 0 -0.5rem;
	}
	.form-section,
	.sub-section {
		row-gap: 1.5rem;
	}
	@media screen and (width > 600px) {
		.billing,
		.sub-section {
			grid-template-columns: 1fr 1fr;
			row-gap: 1.5rem;
			column-gap: 1rem;
		}
	}
`;
export default Wrapper;
