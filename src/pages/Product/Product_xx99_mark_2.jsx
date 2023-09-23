import Wrapper from './Wrappers/ProductWrapper';
import {
	SingleProductInfo,
	SingleProductAbout,
	SingleProductGallery,
	Recommendations,
} from '../../components/ui';
import {
	productAbout,
	productImages,
	productInfo,
	recommendations,
} from '../../data/products/xx99_mark_2';
import { useEffect } from 'react';
import { scrollToTop } from '../../utils';
const Product_xx99_mark_2 = () => {
	useEffect(() => {
		scrollToTop();
	}, []);
	return (
		<Wrapper>
			<SingleProductInfo data={productInfo} />
			<SingleProductAbout data={productAbout} />
			<SingleProductGallery data={productImages} />
			<Recommendations data={recommendations} />
		</Wrapper>
	);
};

export default Product_xx99_mark_2;
