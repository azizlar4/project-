import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { clearErrors } from "../JS/Action/user";

const Notification = ({ error }) => {
  console.log(error.msg);
  const [show, setshow] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setshow(true);
      dispatch(clearErrors());
    }, 3000);
  }, [show, dispatch]);
  return (
    <div>
      {show && (
        <div>
          {toast.error(error.msg)}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      )}
    </div>
  );
};

export default Notification;
