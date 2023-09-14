import Wrapper from './HomeWrapper';
import { Categories, Hero } from '../../components/ui/';

const Home = () => {
	return (
		<Wrapper>
			<Hero />
			<Categories />
		</Wrapper>
	);
};

export default Home;
