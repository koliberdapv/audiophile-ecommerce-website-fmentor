import Wrapper from './Wrappers/ProductWrapper';
import {
	Categories,
	PreFooterInfo,
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
} from '../../data/products/yx1_earphones';
import { useEffect } from 'react';
import { scrollToTop } from '../../utils';
const Product_yx1_earphones = () => {
	useEffect(() => {
		scrollToTop();
	}, []);
	return (
		<Wrapper>
			<section className="product-specific-info | grid">
				<SingleProductInfo data={productInfo} />
				<SingleProductAbout data={productAbout} />
				<SingleProductGallery data={productImages} />
			</section>
			<Recommendations data={recommendations} />
			<Categories />
			<PreFooterInfo />
		</Wrapper>
	);
};

export default Product_yx1_earphones;
