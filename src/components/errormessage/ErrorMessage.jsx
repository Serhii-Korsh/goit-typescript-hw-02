import "react";
import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => <p className={s.err}>{message}</p>;

export default ErrorMessage;
