import styled from "styled-components";


export const Wrap = styled.div`
  background-color: bisque;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;

  .check {
    /* background-color: tan; */
    flex-grow: 0.3;
    display: flex;
    justify-content: center;

    .check__form {
      display: inline-block;
      position: relative;
      max-width: 100%;
    }
  }

  .title {
    /* background-color: seagreen; */
    width: 35%;
    display: flex;
    align-items: center;

    .title__img {
      display: inline-block;
      position: relative;
      width: 100px;
      vertical-align: middle;
      border: 1px solid #eee;

      img {
        max-width: 100%;
        border: 0;
        vertical-align: top;
      }
    }

    .title__text {
      margin-left: -105px;
      padding-left: 120px;
      max-width: 100%;
    }
  }

  .fee {
    /* background-color: salmon; */
    width: 10%;
    display: flex;
    justify-content: space-between;
    
    div {
      text-align: center;
      width: 50px;
    }
  }

  .amount {
    /* background-color: skyblue; */
    flex-grow: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      text-align: center;
      width: 50px;
    }

    button {
      width: 30px;
    }
  }

  .price {
    /* background-color: bisque; */
    flex-grow: 1;
    text-align: center;
  }

  .del {
    /* background-color: olive; */
    width: 124px;
  }
`

