import styled from 'styled-components';
import arrow_right from '../../assets/shared/desktop/icon-arrow-right.svg';

const LinkButton = ({ direction }) => {
	return (
		<Wrapper>
			<div className="content | subtitle flex align-center">
				<span>shop</span>
				<img
					src={arrow_right}
					alt="arrow right"
				/>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	background-color: var(--clr-white);
	background-color: transparent;
	color: var(--clr-full-black);
	.content {
		padding: 1em 2em;
		gap: 1.125rem;
		margin-inline: auto;
	}
	span {
		opacity: 0.5;
	}
`;

export default LinkButton;
