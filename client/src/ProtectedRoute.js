import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";


export const ProtectedRoute = ({
    
  element: Component,
  ...rest
}) => {
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuth) {
          return <Component {...props} />;
        } else {
          return (
            <Route path="/" element={<Home />} />
          );
        }
      }}
    />
  );
};
