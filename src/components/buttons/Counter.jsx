import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Counter = ({ amount, setAmount, max }) => {
  const changeAmount = (e) => {
    const action = e.currentTarget.dataset.action;
    if (action === 'increase') {
      if (amount > max) return;
      setAmount((prev) => prev + 1);
    }
    if (action === 'decrease') {
      if (amount <= 1) return;
      setAmount((prev) => prev - 1);
    }
  };
  return (
    <Wrapper>
      <div className="counter | grid">
        <button
          className="subtitle"
          data-action="decrease"
          onClick={changeAmount}
        >
          -
        </button>
        <p className="subtitle">{amount}</p>
        <button
          className="subtitle"
          data-action="increase"
          onClick={changeAmount}
        >
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
