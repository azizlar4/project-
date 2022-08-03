import React, { useEffect } from 'react'
import {  Spinner, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

import SideBar from '../SideBar'
import "../AdminDashboard.css";
import { getAllPayments } from '../../../JS/Action/payment';
import OrdersRow from './OrdersRow';


const OrdersControl = () => {
  const load = useSelector((state) => state.paymentReducer.load);
  const dispatch = useDispatch();
  const listPayments = useSelector((state) => state.paymentReducer.allPayments);

useEffect(() => {
  dispatch(getAllPayments())
  
    }, [dispatch]);
  return (
    <div style={{ backgroundColor: "#4950578a" }}>

      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="stylesheet" href="css/style.css" />
      <div className="wrapper d-flex align-items-stretch">

    <SideBar active="2"/>
    <div id="content" className="p-4 p-md-5 pt-5">
          <h2>Users List</h2>
          <Table striped bordered hover variant="dark">
            <thead >
              <tr>
              
                <th>Email</th>
                <th>Total </th>
                <th>Card Owner</th>
                <th>Card Number</th>
                <th>Expiration Dates</th>
                <th>CVV </th>
                <th>Address </th>
                <th>Postal code  </th>
                <th>Paid </th>
                <th>Deliverd </th>
                <th>Date </th>
              </tr>
            </thead>
            <tbody>
          
            {load ? (
              <Spinner animation="border" variant="secondary" />
            ) : (
                listPayments.map((el) => <OrdersRow order ={el} />)
            )}
         
           
            </tbody>
          </Table>
        
        </div>
      
        </div>
        </div>
       
  )
}

export default OrdersControl