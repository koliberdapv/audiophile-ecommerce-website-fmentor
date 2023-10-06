import Wrapper from './Wrappers/ProductWrapper';
import {
  SingleProductInfo,
  SingleProductAbout,
  SingleProductGallery,
  Recommendations,
  Categories,
  PreFooterInfo,
} from '../../components/ui';
import { useEffect } from 'react';
import { scrollToTop } from '../../utils';

const Product = ({ product }) => {
  const { info, about, images, recommendations } = product.info;
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <Wrapper>
      <section className="product-specific-info | grid">
        <SingleProductInfo data={info} product={product} />
        <SingleProductAbout data={about} />
        <SingleProductGallery data={images} />
      </section>
      <Recommendations data={recommendations} />
      <Categories />
      <PreFooterInfo />
    </Wrapper>
  );
};

export default Product;
