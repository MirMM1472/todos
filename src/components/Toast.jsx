import React, { forwardRef, useImperativeHandle } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    handelToast(message) {
      toast(message);
    },
  }));

  return <ToastContainer theme="dark" />;
});

export default Toast;
