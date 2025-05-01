import styled from "styled-components";

export const MenuHamburguer = styled.article`
  @media (width >= 992px) {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  @media (width <= 991px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: fixed;
    width: 2rem;
    height: 2.3rem;
    z-index: 5;
    top: 31px;
    left: 50px;
    transform: scale(0.9);
    cursor: pointer;

    div {
      width: 2.3rem;
      height: 0.25rem;
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.3s linear;
      background-color: ${({ open }) => (open ? "#737373" : "#222121")};

      &:nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      &:nth-child(2) {
        transform: ${({ open }) =>
          open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
  @media (width < 600px) {
    transform: scale(0.8);
    top: 15px;
    left: 20px;
  }
  @media (width < 426px) {
    transform: scale(0.8);
   
  }
`;

export const NavWrapper = styled.div`
  @media (width <= 991px) {
    nav {
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
      opacity: ${({ open }) => (open ? 1 : 0)};
      visibility: ${({ open }) => (open ? "visible" : "hidden")};

      display: flex;
      position: fixed;
      align-items: center;
      justify-content: center;
      flex-flow: column nowrap;
      width: 45%;
      height: 100vh;
      padding: 2rem;
      z-index: 4;
      top: 0px;
      left: 0;
      transition: all 0.3s ease-in-out;
      background-color: white;
    }
    button {
      border: none;
      margin-top: 5%;
      font-weight: 550;
      font-size: 1em;
      color: #262626;
      @media (width < 600px) {
        font-size: 0.8em;
        width: 100%;
      }
    }
    h1 {
      font-size: 2em;
      color: #9e6efe;
      @media (width < 600px) {
        font-size: 1.5em;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 10%;
    }
    li {
      padding: 15px;
      list-style: none;
      text-align: center;
    }
    li:hover {
      border-radius: 5px;
      transform: scale(1.1);
      transition: 0.5s;
    }
  }
  @media (width < 750px) {
    nav {
      width: 50%;
    }
  }
  @media (width < 500px) {
    nav {
      width: 60%;
    }
  }
`;
