import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserPayments } from "../JS/Action/payment";
import OrderItem from "./OrderItem";

const OrdersLists = () => {
  const listPayments = useSelector(
    (state) => state.paymentReducer.userPayments
  );
  const dispatch = useDispatch();

  const load = useSelector((state) => state.paymentReducer.load);

  useEffect(() => {
    dispatch(getUserPayments());
  }, [dispatch]);



  return (

    <div className="col-lg-8 pb-5">
          {  console.log(listPayments)}
      <div className="table-responsive">
        <table className="table table-hover mb-0">
          <thead>
            <tr>
              <th>Order #</th>
              <th>Date Purchased</th>
              <th>Status</th>
              <th>Paid</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
          
            {load ? (
              <Spinner animation="border" variant="secondary" />
            ) : (
              listPayments.map((el) => <OrderItem payment={el} />)
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersLists;
