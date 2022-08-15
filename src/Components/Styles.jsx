import styled from "@emotion/styled";

export const Input = styled.input`
  position: relative;
  display: inline-flex;
  width: 100%;
  height: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  padding: 0 15px;
  border: 1px solid  #708690;
`;

export const Button = styled.button`
  position: relative;
  display: inline-flex;
  width: 100%;
  min-width: 60px;
  max-width: 60px;
  height: 60px;
  font-size: 22px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid  #708690;
`;

export const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonRow = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  height: 60px;
  align-items: center;
`;

export const ButtonColumn = styled.div`
  position: relative;
  display: inline-flex;
  width: 60px;
  height: 100%;
  flex-direction: column;
`;