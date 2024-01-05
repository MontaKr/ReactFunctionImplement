import styled from "styled-components";

export const Wrap = styled.div`
  position: fixed;
  background-color: red;
  padding: 20px 30px;
  border-bottom: 1px solid grey;
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;

  .container {
    display : flex;
    gap: 20px;
    /* background-color: olive; */

    button {
      background-color: transparent;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
    }
  }
`;
