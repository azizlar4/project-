import moment from "moment";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Notification from "../../Components/Notification";
import { clearErrors } from "../../JS/Action/cart";
import { getUserPayments } from "../../JS/Action/payment";
import { clearEdit, updatePassword, updateProfile } from "../../JS/Action/user";
import "./profile.css";

const Profile = () => {
  const [User, setUser] = useState();
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const user = useSelector((state) => state.userReducer.user);
  const edit = useSelector((state) => state.userReducer.edit);
  const errors = useSelector((state) => state.userReducer.errors);
  const loading = useSelector((state) => state.userReducer.loadUser);
  const dispatch = useDispatch();

  const UpdateProfile = (e) => {
    e.preventDefault();
    if (password !== ConfirmPassword) {
      alert("passwords do not match");
    } else {
      password && dispatch(updatePassword({ password: password }));
      User && dispatch(updateProfile(User));
      console.log(User);
      console.log(password);
    }
  };
  const handleChnage = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
    console.log(User)
  };

  useEffect(() => {
    setUser({ name: user.name, last_name: user.last_name,phone:user.phone });
   
    if (edit) {
      dispatch(clearEdit());
      dispatch(clearErrors());
      window.location.reload();
    }
  }, [edit, dispatch, user]);

  return (
    <div className="container mt-5">
      {errors && errors.map((el) => <Notification error={el} />)}
  
      {loading && <Spinner animation="border" variant="secondary" />}
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
                <span className="author-card-position">
                  {moment(user.createdAt).format("lll")}
                </span>
              </div>
            </div>
          </div>
          <div className="wizard">
            <nav className="list-group list-group-flush">
              <a className="list-group-item active" href="/">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <i className="fe-icon-shopping-bag mr-1 text-muted" />
                    <div className="d-inline-block font-weight-medium text-uppercase">
                      Profile
                    </div>
                  </div>
                </div>
              </a>

              <a className="list-group-item" href="/orders">
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
        <div className="col-lg-8 pb-5">
          <form className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="account-fn">First Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="account-fn"
                  defaultValue={user.name}
                  name="name"
                  onChange={handleChnage}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="account-ln">Last Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="account-ln"
                  defaultValue={user.last_name}
                  name="last_name"
                  onChange={handleChnage}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="account-email">E-mail Address</label>
                <input
                  className="form-control"
                  type="email"
                  id="account-email"
                  value={user.email}
                  disabled
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="account-phone">Phone Number</label>
                <input
                  className="form-control"
                  type="number"
                  id="account-phone"
                  defaultValue={user.phone}
                  name="phone"
                  onChange={handleChnage}
                  required
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="account-pass">New Password</label>
                <input
                  className="form-control"
                  type="password"
                  id="account-pass"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="account-confirm-pass">Confirm Password</label>
                <input
                  className="form-control"
                  type="password"
                  id="account-confirm-pass"
                  value={ConfirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12">
              <hr className="mt-2 mb-3" />
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <button
                  className="btn btn-style-1 btn-primary"
                  type="button"
                  data-toast
                  data-toast-position="topRight="
                  data-toast-type="success"
                  data-toast-icon="fe-icon-check-circle"
                  data-toast-title="Success!"
                  data-toast-message="Your profile updated successfuly."
                  onClick={UpdateProfile}
                >
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
