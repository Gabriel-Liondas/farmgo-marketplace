import React, { useState } from "react";
import './MarketCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

class MarketCard {
  constructor(name, category, origin, img) {
    this.name = name;
    this.category = category;
    this.origin = origin;
    this.img = img;
  }
  
  render() {
    return <MarketCardComponent {...this} />;
  }
}

function MarketCardComponent({ name, category, origin, img }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Card id="MarketCard" style={{ width: '18rem' }} onClick={handleShow}>
        <Card.Img id="marketPlaceImg" variant="top" src={img} />
        <Card.Body id='marketCardBody'>
          <p id='marketPlaceText'> {name} </p>
          <p id='marketOriginText'>
            {origin}
          </p>
          <p id='marketCategoryText'>
            {category}
          </p>
          {/* <Button 
            id="marketPlaceBtn"
            onClick={handleShow}>
              Ver mais
          </Button> */}
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose} id="modalVermais" centered>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={img} alt={name} style={{ width: '100%', marginBottom: '1rem' }} />
          <h5 id="categoryName"> Categoria: {category} </h5>
          <h5 id="originName"> Origem: {origin} </h5>
          <p id="productDescription"> Mais informações sobre o vendedor parceiro podem ser adicionadas aqui. </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose} id="closeBtn">
            Fechar
          </Button>
          <Button variant="success" onClick={handleClose} id="verMaisBtn">
            Ver mais
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MarketCard;
