import "react";
import s from "./ImageCard.module.css";

const ImageCard = ({ image }) => (
  <div className={s.box}>
    <img src={image.urls.small} alt={image.alt_description} className={s.img} />
  </div>
);

export default ImageCard;
