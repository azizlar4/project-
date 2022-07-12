import React from "react";
import {  Card } from "react-bootstrap";
import Rating from "../Functions/Stars";

const ProductCard = ({product}) => {
  return (
    <div>
      <Card style={{ width: "18rem" ,margin: "10px", }}>
        <Card.Img variant="top" src={product.image_url} />
        <hr/>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}€</Card.Text>
          <Card.Text>{Rating(product.rating)} </Card.Text>
          
        
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
