import styled from 'styled-components';

const ColorButton = () => {
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
		background-color: var(--clr-dark-orange);
		color: var(--clr-white);
		padding: 1em 2em;
	}
	button:hover {
		background-color: var(--clr-light-orange);
	}
`;

export default ColorButton;
