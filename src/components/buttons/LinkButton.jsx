import styled from 'styled-components';
import arrow_right from '../../assets/shared/desktop/icon-arrow-right.svg';

const LinkButton = () => {
	return (
		<Wrapper>
			<button>
				<div className="subtitle flex center">
					shop
					<img
						src={arrow_right}
						alt="arrow right"
					/>
				</div>
			</button>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	button {
		background-color: var(--clr-white);
		color: var(--clr-full-black);
		padding: 1em 2em;
		div {
			gap: 1.125rem;
		}
	}
	button:hover {
		color: var(--clr-dark-orange);
	}
`;

export default LinkButton;
