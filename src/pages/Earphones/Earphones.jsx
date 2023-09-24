import { useEffect } from 'react';
import data from '../../data/category/earphones';
import Wrapper from './Wrappers/EarphonesWrapper';
import { isNumberOdd, scrollToTop } from '../../utils';
import {
	Categories,
	CategoryHeader,
	PreFooterInfo,
	ProductInfo,
} from '../../components/ui';

const Earphones = () => {
	useEffect(() => {
		scrollToTop();
	}, []);
	return (
		<Wrapper>
			<CategoryHeader title="earphones" />
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

export default Earphones;
