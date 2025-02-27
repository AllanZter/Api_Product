import styled from "styled-components";

export const Form = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

export const Message = styled.p`
  font-size: 1.2rem;
  color: #999;
  text-align: center;
  margin-top: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  max-width: 300px;
`;

