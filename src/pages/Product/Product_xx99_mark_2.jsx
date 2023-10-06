import Wrapper from './Wrappers/ProductWrapper';
import {
	SingleProductInfo,
	SingleProductAbout,
	SingleProductGallery,
	Recommendations,
	Categories,
	PreFooterInfo,
} from '../../components/ui';
import {
	productAbout,
	productImages,
	productInfo,
	recommendations,
} from '../../data/products/xx99_mark_2';
import { useEffect } from 'react';
import { scrollToTop } from '../../utils';

const Product_xx99_mark_2 = ({ product }) => {
	console.log(product);
	useEffect(() => {
		scrollToTop();
	}, []);
	return (
		<Wrapper>
			<section className="product-specific-info | grid">
				<SingleProductInfo
					data={productInfo}
					product={product}
				/>
				<SingleProductAbout data={productAbout} />
				<SingleProductGallery data={productImages} />
			</section>
			<Recommendations data={recommendations} />
			<Categories />
			<PreFooterInfo />
		</Wrapper>
	);
};

export default Product_xx99_mark_2;
