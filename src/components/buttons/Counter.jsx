import styled from 'styled-components';

const Counter = () => {
	return (
		<Wrapper>
			<div className="counter | grid">
				<button className="subtitle">-</button>
				<p className="subtitle">1</p>
				<button className="subtitle">+</button>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.counter {
		width: 7.5rem;
		height: 3rem;
		background-color: var(--clr-counter-bg);
		grid-template-columns: repeat(3, auto);
		align-items: center;
		justify-items: center;
	}
	button {
		opacity: 0.25;
		height: 100%;
		width: 100%;
	}
	button:hover {
		color: var(--clr-dark-orange);
		opacity: 1;
	}
`;

export default Counter;
