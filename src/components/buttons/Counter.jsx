import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Counter = ({ amount, increase, decrease, isCartCounter }) => {
  return (
    <Wrapper>
      <div className="counter | grid" data-cart={isCartCounter}>
        <button
          className="subtitle"
          data-action="decrease"
          onClick={() => decrease(amount)}
        >
          -
        </button>
        <p className="subtitle">{amount}</p>
        <button className="subtitle" data-action="increase" onClick={increase}>
          +
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .counter {
    width: 7.5rem;
    height: 3rem;
    background-color: var(--clr-counter-bg);
    grid-template-columns: repeat(3, auto);
    align-items: center;
    justify-items: center;
  }
  [data-cart] {
    width: 96px;
    height: 32px;
  }
  button {
    opacity: 0.25;
    height: 100%;
    width: 100%;
  }
  button:hover {
    color: var(--clr-dark-orange);
    opacity: 1;
  }
`;

export default Counter;
