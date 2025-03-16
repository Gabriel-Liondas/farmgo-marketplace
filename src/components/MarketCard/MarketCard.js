import React from "react";
import './MarketCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { RiShoppingCart2Line } from "react-icons/ri";

class MarketCard{

  constructor(name, category, origin, img) {
    this.name = name;
    this.category = category;
    this.origin = origin;
    this.img = img;
  }
  
  render() {
    return (
      <Card id="MarketCard" style={{ width: '18rem' }}>
        <Card.Img id="marketPlaceImg" variant="top" src={this.img} />
        <Card.Body id='marketCardBody'>
          <p id='marketPlaceText'> {this.name} </p>
          <p id='marketOriginText'>
            {this.origin}
          </p>
          <p id='marketCategoryText'>
            {this.category}
          </p>
          <Button 
            id="marketPlaceBtn">
              Ver mais
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default MarketCard;
