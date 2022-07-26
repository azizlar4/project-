import React, { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import Rating from "../Functions/Stars";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, editProduct } from "../JS/Action/product";

const ProductCard = ({ product }) => {
    //Edit modal
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    //delete modal
    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

  const [newProduct, setnewProduct] = useState({});
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.userReducer.isAdmin);
  const navigate = useNavigate();
  const handleChange=(e)=>{
    setnewProduct({...newProduct,[e.target.name]:e.target.value})
}
//handle edit product
const handleEditProduct =()=>{
  dispatch(editProduct(product._id,newProduct));
  setShowEdit(false);

}
//handle delete product 
const handleDelteProduct =()=>{
  dispatch(deleteProduct(product._id));
  setShowDelete(false);

}




  return (
    <div className="product_box">
      <Card style={{ width: "18rem" }}>
        <Card.Body onClick={(e) => navigate(`/product/${product._id}`)}>
          <Card.Img variant="top" src={product.image_url} />
          <hr />
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}€</Card.Text>
          <Card.Text>{Rating(product.rating)} </Card.Text>
        </Card.Body>
        {isAdmin ? (
          <Card.Body
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <Button
            onClick={handleShowDelete}
              variant="link"
              style={{
                color: "red",
                textDecoration: "none",
                fontSize: "bold",
                border: "1px solid ",
                padding: "5px",
              }}
            >
              Delete
            </Button>
            <Button
              onClick={handleShowEdit}
              variant="link"
              style={{
                color: "rgb(255, 159, 26)",
                textDecoration: "none",
                fontSize: "bold",
                border: "1px solid ",
                padding: "5px",
              }}
            >
              Edit
            </Button>
          </Card.Body>
        ) : null}
      </Card>
{/* modal delete Product */}
      <Modal
        show={showDelete}
        onHide={handleCloseDelete}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete <b>{product.name}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelteProduct}>Yes!</Button>
        </Modal.Footer>
      </Modal>
        {/* Modal Edit product */}
      <Modal show={showEdit} onHide={handleCloseEdit} animation={false} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit {product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name </Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder={product.name}
                onChange={handleChange}
              />
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                placeholder={product.description}
                onChange={handleChange}
              />
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="price"
                type="number"
                min={0}
                placeholder={product.price}
                onChange={handleChange}
              />
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                name="quantity"
                type="number"
                min={0}
                placeholder={product.quantity}
                onChange={handleChange}
              />
              <Form.Label>Image_url</Form.Label>
              <Form.Control
                name="image_url"
                type="text"
                placeholder={product.image_url}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductCard;
