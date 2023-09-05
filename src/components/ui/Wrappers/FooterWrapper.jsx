import styled from 'styled-components';

const Wrapper = styled.footer`
	background-color: var(--clr-black-1);
	.footer-container {
		flex-direction: column;
		padding: 3rem 1.5rem 2rem;
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
`;
export default Wrapper;
