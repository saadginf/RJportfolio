import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
export const RightBarContainer = styled.div`
  top: 0;
  width: 300px;
  padding: 30px;
  background-color: #d4cece;
  color: #d8d8d8;
  position: fixed;
  height: 100%;
  overflow-y: hidden;
  z-index: 19999;
  transition: 0.6s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const CloseIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 20px;
  background: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;
`;
export const LinksContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ScrollLinks = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ScrollLink = styled(LinkS)`
  margin-bottom: 50px;
  text-decoration: none;
  color: #000;
  font-size: 25px;
  padding: 10px 0;
  cursor: pointer;

  &.active {
    text-decoration: none;
    border-bottom: 3px solid black;
  }
`;
export const BtnWrapper = styled.div``;
