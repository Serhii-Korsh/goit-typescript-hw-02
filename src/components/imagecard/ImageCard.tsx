import React from "react";
import s from "./ImageCard.module.css";
import { Image } from "../types";

interface ImageCardProps {
  image: Image;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => (
  <div className={s.box}>
    <img src={image.urls.small} alt={image.alt_description} className={s.img} />
  </div>
);

export default ImageCard;
