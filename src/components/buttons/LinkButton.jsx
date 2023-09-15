import styled from 'styled-components';
import arrow_right from '../../assets/shared/desktop/icon-arrow-right.svg';
import { Link } from 'react-router-dom';

const LinkButton = ({ direction }) => {
	return (
		<Wrapper>
			<Link
				className="link-container grid"
				to={`/category/${direction}`}
			>
				<div className="content | subtitle flex align-center">
					<span>shop</span>
					<img
						src={arrow_right}
						alt="arrow right"
					/>
				</div>
			</Link>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.link-container {
		background-color: var(--clr-white);
		background-color: transparent;
		color: var(--clr-full-black);
	}
	.content {
		padding: 1em 2em;
		gap: 1.125rem;
		margin-inline: auto;
	}
	span {
		opacity: 0.5;
	}
	.link-container:hover span {
		color: var(--clr-dark-orange);
		opacity: 1;
	}
`;

export default LinkButton;
