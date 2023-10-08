import { BackButton } from '../buttons';
import AddToCart from './AddToCart';
import Wrapper from './Wrappers/SingleProductInfoWrapper';

const SingleProductInfo = ({ data, product }) => {
  const { images, name, description, isNew } = data;
  const { id, price } = product;
  return (
    <Wrapper>
      <div className="width-controller">
        <BackButton />
        <div className="content-container | grid">
          <figure className="img-container">
            <img src={images.mobile} alt={name} data-resolution="mobile" />
            <img src={images.tablet} alt={name} data-resolution="tablet" />
            <img src={images.desktop} alt={name} data-resolution="desktop" />
          </figure>
          <section className="product-info | grid">
            {isNew && <p className="overline">new product</p>}
            <h1>{name}</h1>
            <p className="text">{description}</p>
            <AddToCart product={product} />
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProductInfo;
