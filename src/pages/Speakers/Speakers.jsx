import { useEffect } from 'react';
import data from '../../data/category/speakers';
import Wrapper from './Wrappers/SpeakersWrapper';
import { isNumberOdd, scrollToTop } from '../../utils';
import {
	Categories,
	CategoryHeader,
	PreFooterInfo,
	ProductInfo,
} from '../../components/ui';

const Speakers = () => {
	useEffect(() => {
		scrollToTop();
	}, []);
	return (
		<Wrapper>
			<CategoryHeader title="speakers" />
			<section className="products | grid">
				{data.map((product, index) => {
					return (
						<ProductInfo
							key={index}
							data={product}
							inverted={isNumberOdd(index)}
						/>
					);
				})}
			</section>
			<Categories />
			<PreFooterInfo />
		</Wrapper>
	);
};

export default Speakers;
