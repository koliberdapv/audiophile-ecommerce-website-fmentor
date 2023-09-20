import { useEffect } from 'react';
import data from '../../data/category/headphones';
import Wrapper from './Wrappers/HeadphonesWrapper';
import { isNumberOdd, scrollToTop } from '../../utils';
import {
	Categories,
	CategoryHeader,
	PreFooterInfo,
	ProductInfo,
} from '../../components/ui';
const Headphones = () => {
	useEffect(() => {
		scrollToTop();
	}, []);
	return (
		<Wrapper>
			<CategoryHeader title="headphones" />
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

export default Headphones;
