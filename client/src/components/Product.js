import React from 'react';
import { Card} from 'react-bootstrap';


const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Img src={product.image} variant="top" />
      <Card.Body>
        <Card.Text as="h3">{product.name}</Card.Text> 
        <Card.Text as="h4">{product.author}</Card.Text> 
        <Card.Text as="h5">${product.price}</Card.Text> 
      </Card.Body>
    </Card>
  );
};

export default Product;
