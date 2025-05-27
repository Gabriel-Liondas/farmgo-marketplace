
import React, { useState } from "react";
import './MarketCard.css'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

class MarketCard {
  constructor(id, name, category, origin, img) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.origin = origin;
    this.img = img;
  }
  
  render() {
    return <MarketCardComponent 
              id={this.id} 
              name={this.name} 
              category={this.category} 
              origin={this.origin} 
              img={this.img} 
            />;
  }
}

function MarketCardComponent({ id, name, category, origin, img }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleNavigateToProfile = () => {
    setShowModal(false);
    if (id) {
      navigate(`/perfil/${id}`);
    } else {
      console.error("ID do vendedor não fornecido para navegação.");
    }
  };

  return (
    <>
      <Card id="MarketCard" style={{ width: '18rem' }} onClick={handleShowModal}>
        <Card.Img id="marketPlaceImg" variant="top" src={img} alt={name} />
        <Card.Body id='marketCardBody'>
          <p id='marketPlaceText'> {name} </p>
          <p id='marketOriginText'>
            {origin}
          </p>
          <p id='marketCategoryText'>
            {category}
          </p>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal} id="modalVermais" centered>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={img} alt={name} style={{ width: '100%', marginBottom: '1rem', borderRadius: '8px' }} />
          <h5 id="categoryName"> Categoria: {category} </h5>
          <h5 id="originName"> Origem: {origin} </h5>
          <p id="productDescription"> Mais informações sobre o vendedor parceiro podem ser adicionadas aqui. </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseModal} id="closeBtn">
            Fechar
          </Button>
          <Button variant="success" onClick={handleNavigateToProfile} id="verMaisBtn">
            Ver Perfil do Vendedor
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MarketCard;