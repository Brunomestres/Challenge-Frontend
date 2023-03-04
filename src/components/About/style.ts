import styled from "styled-components";

export const Content = styled.div`
  width: 1197px;
  height: 381px;
  margin: 64px 121.5px;
  display: flex;
`;
export const Image = styled.img`
  width: 609px;
  height: 381px;
  border-radius: 16px;
  margin-right: 48px;
`;
export const Description = styled.div`
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 540px;
  height: 340px;
  gap: 24px;
  margin: 20.5px 0;
  h6 {
    width: 398px;
    display: flex;
    align-items: center;
    text-align: center;
    height: 76px;
    color: #ffffff;
    font-weight: 700;
    font-style: normal;
    font-size: 32px;
    line-height: 38px;
  }
  p {
    color: #ffffff;
    width: 540px;
    height: 160px;
    display: flex;
    font-size: 20px;
    align-items: center;
    text-align: center;
    line-height: 40px;
  }
  .ticket {
    background: #4650bd;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 16px;
    color: #ffffff;
    width: 256px;
    height: 56px;
    border-radius: 16px;
  }
`;
