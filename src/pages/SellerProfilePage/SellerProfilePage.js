// src/pages/SellerProfilePage/SellerProfilePage.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SellerProfilePage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'; // Para feedback de carregamento

// Importe seus dados mockados para encontrar o vendedor
// Em uma aplicação real, você faria uma chamada de API aqui
import MockProductsData from '../Shop/MockProducts'; // Ajuste o caminho se necessário

// Função para simular a busca de dados do vendedor
const fetchSellerData = (sellerId) => {
  // Os dados em MockProducts são instâncias de MarketCard, precisamos acessar as props
  const allSellersRaw = MockProductsData(); 
  
  const sellerInstance = allSellersRaw.find(s => s.id === sellerId);

  if (sellerInstance) {
    // Simular dados adicionais do perfil que não estão no MarketCard
    // Você pode expandir isso com mais detalhes específicos do vendedor
    return {
      id: sellerInstance.id,
      name: sellerInstance.name,
      category: sellerInstance.category,
      origin: sellerInstance.origin,
      profileImage: sellerInstance.img, // Usar a imagem do card como imagem de perfil
      bannerImage: 'https://placehold.co/1200x300/A9D18E/4F81BD?text=Banner+do+Vendedor', // Placeholder para banner
      bio: `Bem-vindo ao perfil de ${sellerInstance.name}! Somos especialistas em ${sellerInstance.category.toLowerCase()} de alta qualidade, diretamente de ${sellerInstance.origin}. Nosso compromisso é com produtos frescos, sustentáveis e com o melhor atendimento aos nossos clientes. Explore nosso catálogo e entre em contato!`,
      contact: {
        email: `${sellerInstance.id.replace(/\s+/g, '.').toLowerCase()}@farmgo.app`,
        phone: '(XX) XXXXX-XXXX',
        address: `Rua das Palmeiras, 123, ${sellerInstance.origin}`
      },
      products: [ // Catálogo de produtos mockado específico do vendedor
        { id: 'p1', name: 'Tomate Italiano Orgânico', price: 'R$ 8,50/kg', img: 'https://placehold.co/300x200/FF6347/FFFFFF?text=Tomate+Org' },
        { id: 'p2', name: 'Alface Americana Hidropônica', price: 'R$ 4,00/un', img: 'https://placehold.co/300x200/90EE90/000000?text=Alface+Hidro' },
        { id: 'p3', name: `${sellerInstance.category === "Produtos Animais" ? "Queijo Minas Frescal Artesanal" : "Maçã Fuji Selecionada"}`, price: 'R$ 30,00/kg', img: `https://placehold.co/300x200/FFFFE0/000000?text=${sellerInstance.category === "Produtos Animais" ? "Queijo+Frescal" : "Maçã+Fuji"}` },
        { id: 'p4', name: 'Cenoura Baby Doce', price: 'R$ 6,00/pacote', img: 'https://placehold.co/300x200/FFA500/FFFFFF?text=Cenoura+Baby' }
      ],
      paymentMethods: ['Pix', 'Cartão de Crédito (Visa, Master)', 'Dinheiro na Entrega', 'Transferência Bancária'],
      deliveryInfo: 'Entregas às terças e sextas. Consulte taxa para sua região.',
      socialMedia: {
        instagram: `https://instagram.com/${sellerInstance.id}`,
        facebook: `https://facebook.com/${sellerInstance.id}`
      },
      rating: (Math.random() * (5 - 3.8) + 3.8).toFixed(1), 
      reviews: [
        { id: 'r1', userName: 'Juliana M.', rating: 5, comment: 'Produtos sempre frescos e de excelente qualidade! Recomendo muito o(a) ' + sellerInstance.name + '.' , date: '20/05/2025'},
        { id: 'r2', userName: 'Ricardo P.', rating: 4, comment: 'Bom atendimento e entrega no prazo. O tomate estava delicioso.', date: '18/05/2025' },
        { id: 'r3', userName: 'Fernanda L.', rating: 5, comment: 'Melhor queijo que já comi! Virei cliente fiel.', date: '15/05/2025' }
      ]
    };
  }
  return null;
};


function SellerProfilePage() {
  const { vendedorId } = useParams();
  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simula um pequeno delay de API e busca os dados
    const timer = setTimeout(() => {
      const data = fetchSellerData(vendedorId);
      setSeller(data);
      setLoading(false);
    }, 500); // 0.5 segundos de delay
    return () => clearTimeout(timer);
  }, [vendedorId]);

  if (loading) {
    return (
      <Container className="text-center mt-5 pt-5">
        <Spinner animation="border" role="status" variant="success" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Carregando perfil...</span>
        </Spinner>
        <p className="mt-3">Carregando perfil do vendedor...</p>
      </Container>
    );
  }

  if (!seller) {
    return (
      <Container className="text-center mt-5 pt-5">
        <h2>Perfil não encontrado</h2>
        <p>O perfil do vendedor que você está procurando não foi encontrado.</p>
        <Button as={Link} to="/parceiros" variant="primary">Ver outros parceiros</Button>
      </Container>
    );
  }

  return (
    <div className="seller-profile-page">
      <div className="profile-banner" style={{ backgroundImage: `url(${seller.bannerImage})` }}>
        {/* Pode adicionar conteúdo sobre o banner se desejar */}
      </div>
      <Container className="profile-content-container">
        <Row className="mb-4 align-items-end profile-header-info">
          <Col md={3} className="text-center profile-image-container">
            <Image src={seller.profileImage} alt={seller.name} roundedCircle className="profile-image-large" />
          </Col>
          <Col md={9} className="seller-details">
            <h1 className="seller-name-profile">{seller.name}</h1>
            <p className="seller-location-profile">
              <i className="bi bi-geo-alt-fill"></i> {seller.origin}
            </p>
            <p className="seller-category-profile">
              <i className="bi bi-tag-fill"></i> Especialidade: {seller.category}
            </p>
            <div className="seller-rating-profile">
              {Array.from({ length: 5 }, (_, i) => (
                <i key={i} className={`bi ${i < Math.floor(seller.rating) ? 'bi-star-fill' : i < seller.rating ? 'bi-star-half' : 'bi-star'}`}></i>
              ))}
              <span className="ms-2">{seller.rating} ({seller.reviews.length} avaliações)</span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={8}>
            <Card className="mb-4 profile-section">
              <Card.Header as="h5"><i className="bi bi-info-circle-fill me-2"></i>Sobre {seller.name}</Card.Header>
              <Card.Body>
                <Card.Text>{seller.bio}</Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-4 profile-section">
              <Card.Header as="h5"><i className="bi bi-basket2-fill me-2"></i>Catálogo de Produtos</Card.Header>
              <Card.Body>
                {seller.products.length > 0 ? (
                  <Row xs={1} sm={2} md={3} className="g-3">
                    {seller.products.map(product => (
                      <Col key={product.id}>
                        <Card className="product-card-profile-page">
                          <Card.Img variant="top" src={product.img} alt={product.name} className="product-image-profile-page" />
                          <Card.Body>
                            <Card.Title className="product-name-profile-page">{product.name}</Card.Title>
                            <Card.Text className="product-price-profile-page">{product.price}</Card.Text>
                            <Button variant="outline-success" size="sm" className="w-100">
                              <i className="bi bi-cart-plus me-1"></i> Adicionar
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <p>Nenhum produto cadastrado no momento.</p>
                )}
              </Card.Body>
            </Card>
             <Card className="mb-4 profile-section">
              <Card.Header as="h5"><i className="bi bi-star-half me-2"></i>Avaliações de Clientes</Card.Header>
              <ListGroup variant="flush">
                {seller.reviews.length > 0 ? seller.reviews.map(review => (
                  <ListGroup.Item key={review.id} className="review-item">
                    <div className="review-header">
                      <strong>{review.userName}</strong>
                      <span className="review-rating">
                        {Array.from({ length: 5 }, (_, i) => (
                          <i key={i} className={`bi ${i < review.rating ? 'bi-star-fill' : 'bi-star'}`}></i>
                        ))}
                      </span>
                    </div>
                    <p className="mb-1 fst-italic">"{review.comment}"</p>
                    <small className="text-muted">{review.date}</small>
                  </ListGroup.Item>
                )) : <ListGroup.Item>Nenhuma avaliação ainda.</ListGroup.Item>}
              </ListGroup>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="mb-4 profile-section sticky-sidebar">
              <Card.Header as="h5"><i className="bi bi-telephone-fill me-2"></i>Contato</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item><strong><i className="bi bi-envelope-fill me-2"></i>Email:</strong> {seller.contact.email}</ListGroup.Item>
                <ListGroup.Item><strong><i className="bi bi-phone-fill me-2"></i>Telefone:</strong> {seller.contact.phone}</ListGroup.Item>
                <ListGroup.Item><strong><i className="bi bi-geo-alt me-2"></i>Endereço:</strong> {seller.contact.address}</ListGroup.Item>
                <ListGroup.Item className="text-center">
                    <Button variant="success"><i className="bi bi-chat-dots-fill me-1"></i> Iniciar Chat</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="mb-4 profile-section sticky-sidebar">
              <Card.Header as="h5"><i className="bi bi-credit-card-fill me-2"></i>Pagamento</Card.Header>
              <ListGroup variant="flush">
                {seller.paymentMethods.map(method => (
                  <ListGroup.Item key={method}><i className="bi bi-check-circle-fill me-2 text-success"></i>{method}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
            
            <Card className="mb-4 profile-section sticky-sidebar">
              <Card.Header as="h5"><i className="bi bi-truck me-2"></i>Informações de Entrega</Card.Header>
              <Card.Body>
                <Card.Text>{seller.deliveryInfo}</Card.Text>
              </Card.Body>
            </Card>

            { (seller.socialMedia.instagram || seller.socialMedia.facebook) &&
              <Card className="mb-4 profile-section sticky-sidebar">
                <Card.Header as="h5"><i className="bi bi-share-fill me-2"></i>Redes Sociais</Card.Header>
                <ListGroup variant="flush">
                  {seller.socialMedia.instagram && 
                    <ListGroup.Item action href={seller.socialMedia.instagram} target="_blank">
                      <i className="bi bi-instagram me-2"></i> Instagram
                    </ListGroup.Item>}
                  {seller.socialMedia.facebook && 
                    <ListGroup.Item action href={seller.socialMedia.facebook} target="_blank">
                      <i className="bi bi-facebook me-2"></i> Facebook
                    </ListGroup.Item>}
                </ListGroup>
              </Card>
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SellerProfilePage;