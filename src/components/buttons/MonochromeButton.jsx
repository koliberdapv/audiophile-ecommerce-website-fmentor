import styled from 'styled-components';

const MonochromeButton = () => {
	return (
		<Wrapper>
			<button>
				<p className="subtitle">see product</p>
			</button>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	button {
		background-color: var(--clr-white);
		color: var(--clr-full-black);
		border: 1px solid var(--clr-full-black);
		padding: 1em 2em;
	}
	button:hover {
		background-color: var(--clr-full-black);
		color: var(--clr-white);
	}
`;

export default MonochromeButton;
