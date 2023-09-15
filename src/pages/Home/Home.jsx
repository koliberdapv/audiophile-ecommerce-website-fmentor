import Wrapper from './Wrappers/HomeWrapper';
import { Categories, Hero } from '../../components/ui/';
import ZX9Promo from './ZX9Promo';

const Home = () => {
	return (
		<Wrapper>
			<Hero />
			<Categories />
			<ZX9Promo />
		</Wrapper>
	);
};

export default Home;
