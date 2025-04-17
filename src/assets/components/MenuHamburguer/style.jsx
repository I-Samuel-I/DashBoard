import styled from "styled-components";

export const MenuHamburguer = styled.article`
  @media (width >= 992px) {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  @media (width <= 991px) {
    width: 2rem;
    height: 2.3rem;
    position: fixed;
    z-index: 5;
    top: 31px;
    left: 50px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    transform: scale(0.9);
    cursor: pointer;

    @media (width < 600px) {
      transform: scale(0.8);
      right: 100px;
    }
    @media (width < 426px) {
      transform: scale(0.8);
      right: 70px;
    }

    div {
      width: 2.3rem;
      height: 0.25rem;
      border-radius: 10px;
      background-color: ${({ open }) => (open ? "#737373" : "#222121")};
      transform-origin: 1px;
      transition: all 0.3s linear;

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
      background-color: white;
      z-index: 4;
      top: 0px;
      left: 0;
      padding: 2rem;
      width: 45%;
      height: 100vh;
      transition: all 0.3s ease-in-out;

      @media (width < 750px) {
        width: 50%;
      }
      @media (width < 350px) {
        width: 55%;
      }
     
    }
    button {
      border: none;
      margin-top: 5%;
      color: #262626;
      font-weight: 550;
      font-size: 1em;
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
      width: 100%;
      display: flex;
      margin-top: 10%;
      flex-direction: column;
    }
    li {
      list-style: none;
      padding: 15px;
      text-align: center;
    }
    li:hover {
      border-radius: 5px;
      transform: scale(1.1);
      transition: 0.5s;
    }
  }
`;
