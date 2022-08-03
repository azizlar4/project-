import React from "react";
import { useSelector } from "react-redux";
import "./profile.css";
import "./orderList.css";
import OrdersLists from "../../Components/OrdersLists";


const Orders = () => {
  const user = useSelector((state) => state.userReducer.user);
 
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4 pb-5">
          {/* Account Sidebar*/}
          <div className="author-card pb-3">
            <div
              className="author-card-cover"
              style={{
                backgroundImage:
                  "url(https://wallpaperaccess.com/full/3710266.jpg)",
              }}
            ></div>
            <div className="author-card-profile">
              <div className="author-card-avatar">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  alt="Daniel Adams"
                />
              </div>
              <div className="author-card-details">
                <h5 className="author-card-name text-lg">
                  {user.name} {user.last_name}
                </h5>
                <span className="author-card-position">{user.createdAt}</span>
              </div>
            </div>
          </div>
          <div className="wizard">
            <nav className="list-group list-group-flush">
              <a className="list-group-item" href="/profile">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <i className="fe-icon-shopping-bag mr-1 text-muted" />
                    <div className="d-inline-block font-weight-medium text-uppercase">
                      Profile
                    </div>
                  </div>
                </div>
              </a>

              <a
                className="list-group-item active"
                href="/orders"
                
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <i className="fe-icon-tag mr-1 text-muted" />
                    <div className="d-inline-block font-weight-medium text-uppercase">
                      Orders List
                    </div>
                  </div>
                </div>
              </a>
            </nav>
          </div>
        </div>
        {/* Profile Settings*/}
      <OrdersLists/>
      </div>
    </div>
  );
};

export default Orders;
