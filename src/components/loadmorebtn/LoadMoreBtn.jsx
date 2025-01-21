import "react";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => (
  <button onClick={onClick} className={s.btn}>
    Load more
  </button>
);

export default LoadMoreBtn;
