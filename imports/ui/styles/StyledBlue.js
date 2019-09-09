import styled from 'styled-components'

export const StyledBlue = styled.div`
  main {
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 128, 192, 0.3)
  }

  h1, h2, p {
    text-align: center;
    color: rgba(96, 192, 255, 0.5);
  }

  h1 {
    font-size: 12vw;
    margin:0;
  }

  h2 ~ h1 { 
    margin-top: 0;
  }

  h2 {
    font-size: 6vw;
  }

  p {
    color: #fff;
    text-align: left;
    font-size: 4vw;
    margin: 1em;
  }

  div.smoke {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("../../../img/smoke.jpg");
    background-position: center;
    background-size: cover;
    z-index: -1;
  }

  div.background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("../../../img/blue.jpg");
    background-position: center;
    background-size: cover;
    opacity: 0.5;
    z-index: -1;
    animation: pulse 15s infinite;
  }


  @keyframes pulse {
    0%, 100% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.5;
    }
  }

  section#title {
    flex-direction: column;
  }
`