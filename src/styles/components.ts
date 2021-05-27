import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`

const slideInUp = keyframes`
  from {
    transform: translateY(100%);
    visibility: visible;
  }
  to {
    transform: translateY(0);
  }
`;

export const ContainerCreditCard = styled.div`
  .credit-card {
    width: 600px;
    max-width: 100%;
    color: #fff;
    font-family: 'Inconsolata', monospace;
    position: relative;
    .front {
      border-radius: 15px;
      padding: 30px;
      box-shadow: 5px 5px 30px 0 rgba(0, 0, 0, 0.5);
      background-color: ${props => props.theme.colors.dark};
      background: ${props => `linear-gradient(130deg, ${props.theme.colors.dark} 0%, ${props.theme.colors.primary} 100%);`};
      transition: opacity 0.5s;
      &.inactive {
        opacity: 0.5;
      }
      header {
        text-align: right;
      }
      main {
        .icons {
          display: flex;
          justify-content: space-between;
          align-items: center;
          &:not(.active) {
            filter: grayscale(1);
          }
        }
        .card-number {
          font-size: 4.5rem;
          font-weight: 900;
          letter-spacing: 0.5rem;
          margin-top: 15px;
        }
      }
      footer {
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p:last-child {
          strong {
            display: block;
            font-size: 2.5rem;
          }
        }
      }
    }
    .back {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 60px;
      left: -30px;
      box-shadow: 5px 5px 30px 0 rgba(0, 0, 0, 0.5);
      border-radius: 15px;
      background-color: ${props => props.theme.colors.dark};
      background: ${props => `linear-gradient(130deg, ${props.theme.colors.dark} 0%, ${props.theme.colors.primary} 100%);`};
      animation: ${slideInUp} 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      main {
        margin-top: 20px;
        strong {
          display: block;
          text-align: right;
          padding: 0 20px;
          font-size: 2rem;
        }
        .cvv {
          width: 100%;
          height: 60px;
          background: #000;
          color: #fff;
          padding: 10px 20px;
          font-size: 2.5rem;
          text-align: right;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
      }
      header {
        display: flex;
        justify-content: space-between;
        padding: 30px 30px 0 30px;
        a {
          color: #fff;
        }
      }
    }
  }
`

export const FormGroup = styled.div`
  margin-bottom: 1.6rem;
  label {
    margin-bottom: 1rem;
    display: inline-block;
    font-size: 1.8rem;
  }
  input, select {
    padding: 20px;
    width: 100%;
    background: transparent;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 5px;
    outline: none;
  }
`