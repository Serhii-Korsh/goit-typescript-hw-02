import React from "react";
import s from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <p className={s.err}>{message}</p>
);

export default ErrorMessage;
