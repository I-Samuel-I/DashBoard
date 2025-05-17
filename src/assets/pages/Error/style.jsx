import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 10px;

  h1 {
    font-size: 10rem;
  }
  h2 {
    text-align: center;
    font-size: 1.5rem;
  }
  a {
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: underline;
    color: #9e6efe;
    &:hover {
      cursor: pointer;
      color: #845cd3;
    }
  }
  div {
    display: flex;
    gap: 15px;
  }

  @media (width < 1200px) {
    div {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (width < 500px) {
    h1 {
      font-size: 8rem;
    }
    h2 {
      font-size: 1.3rem;
    }
  }
`;
