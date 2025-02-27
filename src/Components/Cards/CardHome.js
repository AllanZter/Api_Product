import React from "react";
import { Card, Image, Button } from "./styled";

const CardHome = ({ produto }) => {
  return (
    <Card>
      <Image src={produto.image} alt={produto.title} />
      <h3>{produto.title}</h3>
      <p id="price">R$ {produto.price}</p>
      <p>Estoque: {produto.available_quantity}</p>
      <Button onClick={() => alert(`Comprando ${produto.title}`)}>Comprar</Button>
    </Card>
  );
};

export default CardHome;
