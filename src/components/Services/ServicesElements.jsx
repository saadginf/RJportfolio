import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #313133;
  @media (max-width: 890px) {
    height: 1100px;
  }
  @media (max-width: 690px) {
    height: 1500px;
  }
`;
export const ServicesWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  width: 100%;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  margin-bottom: 20px;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;
export const ServicesIcon = styled.img`
  height: 400px;
  width: 300px;
  border-color: #e3e3e3;
  border-width: 20px;
  border-style: groove;
`;
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  @media (max-width: 480px) {
    height: 2rem;
  }
`;
export const ServicesH2 = styled.h2`
  font-size: 1rem;
  color: #000;
  margin-bottom: 10px;
`;
export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 20px;
  padding: 0 10px;
`;
export const BtnWrap = styled.div`
  margin-top: 30px;
`;
