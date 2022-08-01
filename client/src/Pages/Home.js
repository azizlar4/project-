import React, { useEffect, useState } from "react";



import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";
import Button from 'react-bootstrap/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProductsList from "../Components/ProductsList";
import { Form, FormControl, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../JS/Action/product";

const theme = createTheme();


const Home = ({ match }) => {
  const [newProduct, setnewProduct] = useState({});
  const dispatch=useDispatch();
//MODAL
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isAuth=useSelector(state=>state.userReducer.isAuth);
  const isAdmin=useSelector(state=>state.userReducer.isAdmin);
  const user=useSelector(state=>state.userReducer.user);
  const [keyword,setKeyword]=useState("");

  const handleChange=(e)=>{
    setnewProduct({...newProduct,[e.target.name]:e.target.value})
}
useEffect(() => {
  localStorage.getItem('token')
})

 //handle edit product
const handleAddProduct =()=>{
  dispatch(addProduct(newProduct));
  setShow(false);
}
  return (
    <div>

   
      <ThemeProvider theme={theme}>
        <div style={{display:"flex",justifyContent:"space-around"}}>
          {isAuth?(<p style={{position:"absolute",right: 150,border:"solid",padding:"5px",margin:"10px"}}>Hi, {user.name} </p>):null}
        {isAdmin?(<Button onClick={handleShow} size="lg" variant="success" style={{position:"absolute",left: 150,border:"solid",padding:"10px",margin:"10px"}}>Add prodcut </Button>):null}
        </div>
      
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <Form className="d-flex justify-content-center" style={{marginTop:40  }} > 
        <FormControl
          style={{ width: "450px" }}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          name="search"
          onChange={e=>setKeyword(e.target.value)}
        />
    
        
      </Form>
  
      <Container sx={{ py: 8}} >
         <ProductsList keyword ={keyword} key ={keyword}/>
        </Container>
        <Modal show={show} onHide={handleClose} animation={false} size="lg">
        <Modal.Header closeButton>
          <Modal.Title> Add new Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name </Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter Name"
                onChange={handleChange}
              />
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                placeholder="Enter Description"
                onChange={handleChange}
              />
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="price"
                type="number"
                min={0}
                placeholder="Enter Price"
                onChange={handleChange}
              />
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                name="quantity"
                type="number"
                min={0}
                placeholder="Enter Quantity"
                onChange={handleChange}
              />
              <Form.Label>Image_url</Form.Label>
              <Form.Control
                name="image_url"
                type="text"
                placeholder="Enter Image_url"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddProduct}>
            Add product
          </Button>
        </Modal.Footer>
      </Modal>
          
         
        </main>
        
      </ThemeProvider>
    </div>
  );
};

export default Home;
