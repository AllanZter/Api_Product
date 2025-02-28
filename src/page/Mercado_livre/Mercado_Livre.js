import React, { useState, useEffect } from "react";
import { Form, Button, Input, CardContainer, Card, Image } from "./styled";

export const Mercado = () => {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({
    title: "",
    price: "",
    available_quantity: "",
    image: "",
    height:"",
    width:"",
    length:"",
  });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, []);

  const cadastrarProduto = () => {
    if (!novoProduto.title || !novoProduto.price || !novoProduto.available_quantity || !novoProduto.image) {
      alert("Preencha todos os campos!");
      return;
    }

    fetch("http://localhost:3001/produtos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ produto: novoProduto, index: editIndex }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data.produtos);
        setNovoProduto({ title: "", price: "", available_quantity: "", image: "",height:"",width:"",length:"" });
        setEditIndex(null);
        alert("Produto salvo com sucesso!");
      });
  };

  const excluirProduto = (index) => {
    fetch(`http://localhost:3001/produtos/${index}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => setProdutos(data.produtos));
  };

  const editarProduto = (index) => {
    setNovoProduto(produtos[index]);
    setEditIndex(index);
  };

  return (
    <Form>
      <h2>{editIndex !== null ? "Editar Produto" : "Cadastrar Novo Produto"}</h2>
      <Input type="text" placeholder="Nome do Produto" value={novoProduto.title} onChange={(e) => setNovoProduto({ ...novoProduto, title: e.target.value })} />
      <Input type="number" placeholder="Preço" value={novoProduto.price} onChange={(e) => setNovoProduto({ ...novoProduto, price: e.target.value })} />
      <Input type="number" placeholder="Quantidade" value={novoProduto.available_quantity} onChange={(e) => setNovoProduto({ ...novoProduto, available_quantity: e.target.value })} />
      <Input type="text" placeholder="URL da Imagem" value={novoProduto.image} onChange={(e) => setNovoProduto({ ...novoProduto, image: e.target.value })} />
      <Input type="number" placeholder="Altura" value={novoProduto.height} onChange={(e) => setNovoProduto({ ...novoProduto, height: e.target.value })} />
      <Input type="number" placeholder="Largura" value={novoProduto.width} onChange={(e) => setNovoProduto({ ...novoProduto, width: e.target.value })} />
      <Input type="number" placeholder="Comprimento" value={novoProduto.length} onChange={(e) => setNovoProduto({ ...novoProduto, length: e.target.value })} />
      <Button onClick={cadastrarProduto}>{editIndex !== null ? "Salvar Edição" : "Cadastrar Produto"}</Button>

      <h2>Produtos Cadastrados</h2>
      <CardContainer>
        {produtos.map((produto, index) => (
          <Card key={index}>
            <span><Image src={produto.image} alt={produto.title} /></span>
            <span><h3>{produto.title}</h3></span>
            <span>R$ {produto.price}</span>
            <span>Quantidade: {produto.available_quantity}</span>
            <span><Button onClick={() => editarProduto(index)}>Editar</Button></span>
            <span id="EX"><Button onClick={() => excluirProduto(index)}>Excluir</Button></span>
          </Card>
        ))}
      </CardContainer>
    </Form>
  );
};
