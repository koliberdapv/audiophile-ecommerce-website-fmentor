import styled from 'styled-components';
const Wrapper = styled.section`
  .content-container {
    background-color: white;
    border-radius: var(--br-form);
    padding: 2rem 1.5rem;
    gap: 2rem;
  }
  .fee-info {
    gap: 0.5rem;
  }
  .grand-total {
    margin-top: 1rem;
  }
  .grand-total div {
    color: var(--clr-dark-orange);
  }
  .fee-item {
    align-items: center;
    justify-content: space-between;
  }
  .fee-item div {
    font-size: var(--fs-400);
    font-weight: var(--fw-700);
  }
  .fee-title {
    text-transform: uppercase;
    opacity: 0.5;
  }
  .cart-btn {
    background-color: var(--clr-dark-orange);
    color: var(--clr-white);
    height: 48px;
    place-items: center;
  }
  .cart-btn:hover {
    background-color: var(--clr-light-orange);
  }
  .items-list {
    gap: 1.5rem;
  }

  .clear-cart-btn {
    background-color: transparent;
  }
  .empty-cart {
    gap: 2rem;
    place-content: center;
    text-align: center;
  }
  @media screen and (width > 600px) {
    .width-controller {
      margin-inline: unset;
      max-width: unset;
      width: 377px;
      margin-left: auto;
      margin-right: 2.4375rem;
    }
  }
`;
export default Wrapper;
