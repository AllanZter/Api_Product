import React, { useState, useEffect } from "react";
import CardHome from "../../Components/Cards/CardHome";
import { Form, Container, Title, Message, CardContainer } from "./styled";

export const Home = () => {
  const [produtos, setProdutos] = useState([]);

  // Buscar produtos no backend ao carregar a página
  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <Form>
      <Title>🏪 Bem-vindo à Nossa Loja</Title>
      <Container>
        {produtos.length === 0 ? (
          <Message>Nenhum produto disponível.</Message>
        ) : (
          <CardContainer>
            {produtos.map((produto, index) => (
              <CardHome key={index} produto={produto} />
            ))}
          </CardContainer>
        )}
      </Container>
    </Form>
  );
};
