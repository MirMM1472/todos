import React from "react";
import Alert from "@mui/material/Alert";
import "./ErrorMsg.css";

const ErrorMessage = ({ msg, style, status }) => {
  return (
    <div className="validation_text mb-3" style={style}>
      <Alert severity={status}>{msg}</Alert>
    </div>
  );
};

export default ErrorMessage;
