import styled from "styled-components";

export const Support = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h1 {
    font-size: 5em;
  }
  @media (768px < width <= 991px) {
    h1 {
      font-size: 4em;
    }
  }
  @media (width <= 767px) {
    h1 {
      font-size: 3em;
    }
  }
  @media (width <= 420px) {
    h1 {
      font-size: 2em;
    }
  }
`;
export const ReturnWrapped = styled.div`
position: absolute;
width: 100%;
top:0;
left: 0;
`
