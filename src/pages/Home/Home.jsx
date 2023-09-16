import Wrapper from './Wrappers/HomeWrapper';
import { Categories, Hero } from '../../components/ui/';
import ZX9Promo from './ZX9Promo';
import ZX7Promo from './ZX7Promo';

const Home = () => {
	return (
		<Wrapper>
			<Hero />
			<Categories />
			<ZX9Promo />
			<ZX7Promo />
		</Wrapper>
	);
};

export default Home;
