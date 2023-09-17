import Wrapper from './Wrappers/HomeWrapper';
import { Categories, Hero, PreFooterInfo } from '../../components/ui/';
import { YX1Promo, ZX7Promo, ZX9Promo } from '.';

const Home = () => {
	return (
		<Wrapper>
			<Hero />
			<section className="page-content | grid">
				<Categories />
				<section className="promos | grid">
					<ZX9Promo />
					<ZX7Promo />
					<YX1Promo />
				</section>
				<PreFooterInfo />
			</section>
		</Wrapper>
	);
};

export default Home;
