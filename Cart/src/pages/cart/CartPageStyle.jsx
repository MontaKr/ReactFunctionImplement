import styled from "styled-components"

export const Wrap = styled.div`
  .container {
    width: 100%;
    margin: 0 auto;

    .table__wrap {
      background: tomato;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .table__top {
        width: 100%;
      }

      .table__bottom {
        background-color: skyblue;
        width: 100%;
        padding: 22px 20px;
        color: #000;
        text-align: center;
      }
    }

    .noItem {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f7f7f7;

      p {
        color: #000;
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
`

