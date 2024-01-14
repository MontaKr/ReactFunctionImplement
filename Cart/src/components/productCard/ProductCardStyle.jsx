import styled from "styled-components";
import Hover from "../../assets/ico_tool.png"

export const Wrap = styled.div`
  position: relative;

  .cardWrap {


    .imgWrap {
      display: block;
      position: relative;
      border: 1px solid #eee;
      overflow: hidden;

      img {
        max-width: 100%;
        border: 0;
        vertical-align: top;
      }
    }

    .contentWrap {
      display: block;
      margin-top: 18px;

      .contentWrap__name {
        color: #000;
        font-size: 17px;
        font-weight: 400;
        max-height: 3em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        word-break: normal;
      }

      .contentWrap__content {
        display: block;
        margin-top: 2px;
        color: #888;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .contentWrap__priceWrap {
        margin-top: 10px;
        display: flex;
        align-items: center;

        .priceWrap__cost1Wrap {
          color: #000;
          font-size: 24px;
          line-height: 1;

          b {
            font-size: 26px;
            font-weight: 600;
          }
        }

        .priceWrap__cost2Wrap {
          margin-left: 3px;
          color: #666;
          font-size: 16px;
          font-weight: 500;
          line-height: 1;
          text-decoration: line-through;

          b {
            font-weight: 500;
          }
        }

        .priceWrap__rateWrap {
          margin-left: 3px;
          color: #ff6500;
          font-size: 16px;
          font-weight: 500;
          line-height: 1;

          b {
            font-weight: 600;
          }
        }
      }
    }
  }

  .product__hover {
    position: absolute;
    top: 42px;
    left: 0;
    width: 100%;
    padding: calc(100% - 63px) 0 21px 0;
    text-align: center;
    opacity: 0;
    transition: opacity .3s ease-in-out;

    &:hover {
      opacity : 1;
    }

    .product__hover--cart {
      display: inline-block;
      position: relative;
      width: 42px;
      height: 42px;
      margin: 0 2px;
      overflow: hidden;
      background: url(${Hover}) 0 0 no-repeat;
      z-index: 1;
      border: none;
      cursor: pointer;
    }
  }

  &::before {
    content: ${props => props.key + 1};
    display: block;
    margin-bottom: 10px;
    color: #000;
    font-size: 32px;
    font-weight: 600;
    line-height: 1;
  }
`