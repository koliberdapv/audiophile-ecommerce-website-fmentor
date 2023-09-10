import styled from 'styled-components';

const Wrapper = styled.section`
	color: var(--clr-white);
	background-color: var(--clr-black-1);
	overflow: hidden;
	position: relative;
	.home-container {
		isolation: isolate;
		text-align: center;
		padding: 7.5rem 0;
	}
	h1 {
		font-size: 2.25rem;
		line-height: var(--line-height-h3);
	}
	header {
		margin: 1rem 0 1.5rem;
	}
	.info {
		margin-bottom: 1.75rem;
		max-width: 333px;
		margin-inline: auto;
		opacity: 0.75;
	}

	.background-img {
		position: absolute;
		top: 27.5%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 100%;
	}
	.background-img img {
		width: 100vw;
	}
	.overline {
		opacity: 0.5;
	}
`;
export default Wrapper;
