import styled from "styled-components";

export const Wrap = styled.div`
  background-color: seagreen;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background-color: azure;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 50px;
      background-color: tan;
      border: none;
      border-radius: 100px;
      font-size: 50px;
      cursor: pointer;
    }

    div {
      width: 100px;
      text-align: center;
      /* background-color: teal; */
      font-size: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%; 
    }
  }
`