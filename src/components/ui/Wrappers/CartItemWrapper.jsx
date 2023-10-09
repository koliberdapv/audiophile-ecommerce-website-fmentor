import styled from 'styled-components';
const Wrapper = styled.li`
  .container {
    justify-content: space-between;
    gap: 1rem;
  }
  .info {
    margin-right: auto;
    padding: 0.5rem 0;
  }
  .amount {
    padding: 0.7rem 0;
  }
  .image-container {
    width: 4rem;
    aspect-ratio: 1/1;
  }
  .image-container img {
    border-radius: var(--br-form);
  }
  .product-name {
    font-weight: var(--fw-700);
  }
  .bold-opacity {
    opacity: 0.5;
    font-weight: var(--fw-700);
    gap: 0.25rem;
  }
`;
export default Wrapper;
