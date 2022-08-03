import React from 'react'
import moment from 'moment';
const OrderItem = ({payment}) => {
    console.log(payment)
  return (
    <tr>
    <td><span className="navi-link" href="#order-details" data-toggle="modal">{payment._id}</span></td>
    <td>{moment(payment.createdAt).format('lll')  }</td>
    <td><span >{payment.isDeliverd?<p style={{backgroundColor:"green", padding:1,borderRadius:15 ,fontSize:12,fontWeight:"bold" , color:"white"}}>Delivred</p>:<p style={{backgroundColor:"yellow", padding:1,borderRadius:15 ,fontSize:12,fontWeight:"bold"}}>In Progress</p>}</span></td>
    <td><span >{payment.isPaid?<p style={{backgroundColor:"green", padding:1,borderRadius:15 ,fontSize:12,fontWeight:"bold" , color:"white"}}>Yes</p>:<p style={{backgroundColor:"red", padding:1,borderRadius:15 ,fontSize:12,fontWeight:"bold"}}>No !</p>}</span></td>
    <td>{payment.total} € </td>
  </tr>
  )
}

export default OrderItem