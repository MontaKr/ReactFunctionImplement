import styled from "styled-components";

export const Wrap = styled.div`
  background-color: tan;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  div {
    text-align: center;
  }

  .card__number {
    flex-grow: 1;
  }

  .card__title {
    flex-grow: 1;
  }

  .card__price {
    flex-grow: 2;
  }

  .card__brand {
    flex-grow: 1.5;
  }
`