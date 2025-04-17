import styled from "styled-components";

export const DarkMode = styled.label`
  position: relative;
  display: inline-block;
  width: 5%;
  height: 24px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  transition: 0.4s;

  &:before {
    content: "";
    position: absolute;
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }

  input:checked + & {
    background-color: #4a4a4a;
  }

  input:checked + &:before {
    transform: translateX(26px);
  }
`;
