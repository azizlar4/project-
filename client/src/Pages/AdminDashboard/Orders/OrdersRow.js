import React from 'react'
import moment from 'moment';
import { editPayment, editProduct } from '../../../JS/Action/payment';
import { useDispatch } from 'react-redux';

const OrdersRow = ({order}) => {


  const dispatch = useDispatch();
  return (
   
    <tr >
    
    <td>{order.user_id.email}</td>
    <td>{order.total}€</td>
    <td>{order.cardOwner}</td>
    <td>{order.cardNumber}</td>
    <td>{order.dateExpr.substring(0,2)}/{order.dateExpr.substring(2)}</td>
    <td>{order.cvv}</td>
    <td> {order.city } {order.address } </td>
    <td>{order.postalCode}</td>
    
    <td>{order.isPaid? <button onClick={()=>dispatch(editPayment(order._id,{isPaid:!order.isPaid}))} style={{backgroundColor:"green", padding:1,borderRadius:15 ,fontSize:12,fontWeight:"bold" , color:"white"}}>Paid</button>:<button onClick={()=>dispatch(editPayment(order._id,{isPaid:!order.isPaid}))} style={{backgroundColor:"red", padding:1,borderRadius:15 ,fontSize:12,fontWeight:"bold"}}>Not Yet</button>}</td>
    <td><span >{order.isDeliverd?<button onClick={()=>dispatch(editPayment(order._id,{isDeliverd:!order.isDeliverd}))} style={{backgroundColor:"green", padding:1,borderRadius:15 ,fontSize:12,fontWeight:"bold" , color:"white"}}>Delivred</button>:<button onClick={()=>dispatch(editPayment(order._id,{isDeliverd:!order.isDeliverd}))} style={{backgroundColor:"red", padding:1,borderRadius:15 ,fontSize:12,fontWeight:"bold",color:"white"}}>Not Delivred</button>}</span></td>
    <td> {moment(order.createdAt).format('lll')  }</td>
 
   
  
    
  </tr>
  )
}

export default OrdersRow