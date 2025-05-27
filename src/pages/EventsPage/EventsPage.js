// src/pages/EventsPage/EventsPage.js
import React from 'react';
import './EventsPage.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; // Import Button
import { Link } from 'react-router-dom'; // Import Link for navigation

// Dados mockados para eventos/promoções
const mockEvents = [
  {
    id: 1,
    title: 'Promoção de Orgânicos da Fazenda Sol Nascente',
    description: 'Descontos de até 30% em todas as frutas e verduras orgânicas. Aproveite!',
    sellerName: 'Fazenda Sol Nascente',
    img: 'https://placehold.co/600x400/A9D18E/4F81BD?text=Promo+Organicos',
    endDate: '2025-06-15',
    sellerId: 'fazenda-sol-nascente-id' // ID para linkar ao perfil do vendedor
  },
  {
    id: 2,
    title: 'Festival do Morango na Horta Feliz',
    description: 'Morangos frescos e deliciosos direto do produtor. Venha conferir nossas geleias e doces!',
    sellerName: 'Horta Feliz',
    img: 'https://placehold.co/600x400/FFC0CB/800000?text=Festival+Morango',
    endDate: '2025-06-20',
    sellerId: 'horta-feliz-id'
  },
  {
    id: 3,
    title: 'Queima de Estoque: Ferramentas Agrícolas',
    description: 'Grandes ofertas em enxadas, pás e outros equipamentos. Estoque limitado!',
    sellerName: 'AgroLoja Tudo Para o Campo',
    img: 'https://placehold.co/600x400/C0C0C0/000000?text=Ferramentas',
    endDate: '2025-06-10',
    sellerId: 'agroloja-id'
  }
];

function EventsPage() {
  return (
    <Container className="events-page-container">
      <h1 className="page-title">Eventos e Promoções</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {mockEvents.map(event => (
          <Col key={event.id}>
            <Card className="event-card">
              <Card.Img variant="top" src={event.img} alt={event.title} />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Oferecido por: {event.sellerName}
                </Card.Subtitle>
                <Card.Text>{event.description}</Card.Text>
                <Card.Text>
                  <small className="text-muted">Válido até: {new Date(event.endDate).toLocaleDateString()}</small>
                </Card.Text>
                <Button variant="primary" as={Link} to={`/perfil/${event.sellerId}`}>
                  Ver Vendedor
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default EventsPage;