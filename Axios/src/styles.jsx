import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: skyblue;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 10vw;
    height: 5vh;
    border: none;
    border-radius: 50px;
    cursor: pointer;
  }

  .card__container {
    background-color: tomato;
    width: 50vw;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`