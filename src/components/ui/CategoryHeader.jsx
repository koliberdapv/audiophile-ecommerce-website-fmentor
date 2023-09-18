import Wrapper from './Wrappers/CategoryHeaderWrapper';
const CategoryHeader = ({ title }) => {
	return (
		<Wrapper>
			<h2>{title}</h2>
		</Wrapper>
	);
};

export default CategoryHeader;
