import MarketCard from '../../components/MarketCard/MarketCard';
import './Shop.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Navbar } from 'react-bootstrap';
import { useState } from 'react';
import MockProducts from './MockProducts';


function Shop() {

  const [categoriaSelecionada, setCategoriaSelecionada] = useState("0");
  const [estadoSelecionado, setEstadoSelecionado] = useState("0");

  const produtos = MockProducts();

  
  // 🔍 Filtra os produtos pela categoria selecionada
  const filtrarProdutos = () => {
    return produtos.filter((produto) => {
      const categoriaMatch = categoriaSelecionada === "0" || produto.category === categoriaSelecionada;
      const estadoMatch = estadoSelecionado === "0" || produto.origin === estadoSelecionado;
      return categoriaMatch && estadoMatch;
    });
  };


  return (
    <div id="ShopPage">
      <h1 id="titleShop">Nossos parceiros</h1>
      <div id="Shop">
        <div id='shopNav'>
          <Form id='shopForms'>
          <Form.Select
              class='shopFilter'
              value={estadoSelecionado}
              onChange={(e) => setEstadoSelecionado(e.target.value)}
            >
              <option value="0">Todos os Estados</option>
              <option value="Acre">Acre</option>
              <option value="Alagoas">Alagoas</option>
              <option value="Amapá">Amapá</option>
              <option value="Amazonas">Amazonas</option>
              <option value="Bahia">Bahia</option>
              <option value="Ceará">Ceará</option>
              <option value="Distrito Federal">Distrito Federal</option>
              <option value="Espírito Santo">Espírito Santo</option>
              <option value="Goiás">Goiás</option>
              <option value="Maranhão">Maranhão</option>
              <option value="Mato Grosso">Mato Grosso</option>
              <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
              <option value="Minas Gerais">Minas Gerais</option>
              <option value="Pará">Pará</option>
              <option value="Paraíba">Paraíba</option>
              <option value="Paraná">Paraná</option>
              <option value="Pernambuco">Pernambuco</option>
              <option value="Piauí">Piauí</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Rio Grande do Norte">Rio Grande do Norte</option>
              <option value="Rio Grande do Sul">Rio Grande do Sul</option>
              <option value="Rondônia">Rondônia</option>
              <option value="Roraima">Roraima</option>
              <option value="Santa Catarina">Santa Catarina</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Sergipe">Sergipe</option>
              <option value="Tocantins">Tocantins</option>
            </Form.Select>
            <Form.Select
              class='shopFilter'
              value={categoriaSelecionada}
              onChange={(e) => setCategoriaSelecionada(e.target.value)}>
                <option value="0">Todos os Produtos</option>
                <option value="Frutas">Frutas</option>
                <option value="Verduras">Verduras</option>
                <option value="Produtos Animais">Produtos Animais</option>
            </Form.Select>
            <Button id="searchBTN">
              Quer se cadastrar?
            </Button>
          </Form>
        </div>
        <div id='listProduct'>
          {filtrarProdutos().map((produto, index) => (
            produto.render()
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
