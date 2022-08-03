import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../JS/Action/product";
import { Spinner } from "react-bootstrap";

const ProductsList = ({ keyword }) => {
  const dispatch = useDispatch();
  const listProducts = useSelector(
    (state) => state.productReducer.listProducts
  );
  const load = useSelector((state) => state.productReducer.loadProducts);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <h2>List of products</h2>
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {load ? (
          <Spinner animation="border" variant="secondary" />
        ) : (
          listProducts
            .filter((el) => el.name.toLowerCase().includes(keyword))
            .map((el) => <ProductCard product={el} key={el._id} />)
        )}
      </div>
    </div>
  );
};

export default ProductsList;
