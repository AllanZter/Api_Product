import styled from "styled-components";

export const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
  width: 250px;
  margin: 16px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 100%;  
  object-fit: cover;
  border-radius: 8px;
`;

export const Button = styled.button`
  background: #ff6600;
  color: white;
  border: none;
  padding: 10px 16px;
  margin-top: 10px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: background 0.3s ease-in-out;

  &:hover {
    background:rgb(230, 27, 0);
  }
`;
