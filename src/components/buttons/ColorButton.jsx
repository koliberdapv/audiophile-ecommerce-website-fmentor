import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/context';

const ColorButton = ({ direction, isAddToCart, amount, product }) => {
  const { addToCart } = useGlobalContext();
  if (isAddToCart) {
    return (
      <Wrapper>
        <Link
          className="link | grid"
          onClick={() => addToCart({ id: product.id, amount, product })}
        >
          <p className="subtitle">add to cart</p>
        </Link>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Link className="link | grid" to={direction}>
        <p className="subtitle">see product</p>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  .link {
    background-color: var(--clr-dark-orange);
    color: var(--clr-white);
    width: 160px;
    height: 48px;
    place-items: center;
  }
  .link:hover {
    background-color: var(--clr-light-orange);
  }
`;

export default ColorButton;
