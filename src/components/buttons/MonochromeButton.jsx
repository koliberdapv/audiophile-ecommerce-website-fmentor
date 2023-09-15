import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MonochromeButton = ({ direction, inverted }) => {
	return (
		<Wrapper>
			<Link
				className={`${inverted ? 'link | grid inverted' : 'link | grid'}`}
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
		background-color: var(--clr-white);
		color: var(--clr-full-black);
		border: 1px solid var(--clr-full-black);
		padding: 1em 2em;
	}
	.link:hover {
		background-color: var(--clr-full-black);
		color: var(--clr-white);
	}
	.inverted {
		color: var(--clr-white);
		background-color: var(--clr-full-black);
		border: none;
	}
	.inverted:hover {
		background-color: var(--clr-gray);
	}
`;

export default MonochromeButton;
