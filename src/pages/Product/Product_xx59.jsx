import Wrapper from './Wrappers/ProductWrapper';
import {
	Recommendations,
	SingleProductAbout,
	SingleProductGallery,
	SingleProductInfo,
} from '../../components/ui';
import {
	productAbout,
	productImages,
	productInfo,
	recommendations,
} from '../../data/products/xx59';
import { useEffect } from 'react';
import { scrollToTop } from '../../utils';
const Product_xx59 = () => {
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

export default Product_xx59;
