import Wrapper from './Wrappers/HomeWrapper';
import { Categories, Hero, PreFooterInfo } from '../../components/ui/';
import { YX1Promo, ZX7Promo, ZX9Promo } from '.';
import { useEffect } from 'react';
import scrollToTop from '../../utils/scrollToTop';

const Home = () => {
	useEffect(() => {
		scrollToTop();
	}, []);
	return (
		<Wrapper>
			<Hero />
			<Categories homePage={true} />
			<section className="promos | grid">
				<ZX9Promo />
				<ZX7Promo />
				<YX1Promo />
			</section>
			<PreFooterInfo homePage={true} />
		</Wrapper>
	);
};

export default Home;
