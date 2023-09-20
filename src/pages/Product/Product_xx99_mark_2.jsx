import Wrapper from './Wrappers/ProductWrapper';
import { SingleProductInfo } from '../../components/ui';
import { productInfo } from '../../data/products/xx99_mark_2';
import { useEffect } from 'react';
import { scrollToTop } from '../../utils';
const Product_xx99_mark_2 = () => {
	useEffect(() => {
		scrollToTop();
	}, []);
	return (
		<Wrapper>
			<SingleProductInfo data={productInfo} />
		</Wrapper>
	);
};

export default Product_xx99_mark_2;
