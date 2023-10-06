import styled from 'styled-components';
const Wrapper = styled.section`
  .price {
    gap: 0.25rem;
  }
  .buttons {
    grid-template-columns: min-content 1fr;
    gap: 1rem;
    margin-top: 1.9375rem;
  }
  @media screen and (600px < width < 750px) {
    .buttons {
      grid-template-columns: 1fr;
    }
  }
  @media screen and (width > 1000px) {
    .buttons {
      margin-top: 2.9375rem;
    }
  }
`;
export default Wrapper;
