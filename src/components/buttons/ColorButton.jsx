import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColorButton = ({ direction }) => {
	return (
		<Wrapper>
			<Link
				className="link | grid"
				to={direction}
			>
				<p className="subtitle">see product</p>
			</Link>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: fit-content;
	.link {
		background-color: var(--clr-dark-orange);
		color: var(--clr-white);
		padding: 1em 2em;
	}
	.link:hover {
		background-color: var(--clr-light-orange);
	}
`;

export default ColorButton;
