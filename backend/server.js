const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

const FILE_PATH = path.join(__dirname, "produtos.json");

// Carregar produtos do arquivo
const carregarProdutos = () => {
  try {
    const data = fs.readFileSync(FILE_PATH, "utf8");
    return JSON.parse(data) || [];
  } catch (error) {
    return [];
  }
};

// Salvar produtos no arquivo
const salvarProdutos = (produtos) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(produtos, null, 2), "utf8");
};

// Rota para obter os produtos
app.get("/produtos", (req, res) => {
  res.json(carregarProdutos());
});

// Rota para adicionar ou editar um produto
app.post("/produtos", (req, res) => {
  const { produto, index } = req.body;
  let produtos = carregarProdutos();

  if (index !== null && index !== undefined) {
    produtos[index] = produto;
  } else {
    produtos.push(produto);
  }

  salvarProdutos(produtos);
  res.json({ message: "Produto salvo com sucesso!", produtos });
});

// Rota para excluir um produto
app.delete("/produtos/:index", (req, res) => {
  let produtos = carregarProdutos();
  produtos.splice(req.params.index, 1);
  salvarProdutos(produtos);
  res.json({ message: "Produto excluído com sucesso!", produtos });
});

// Iniciar servidor
app.listen(3001, () => console.log("Servidor rodando na porta 3001"));
