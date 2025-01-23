import React from "react";
import ImageCard from "../imagecard/ImageCard";
import s from "./ImageGallery.module.css";
import { Image } from "../types";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={s.ul}>
      {images.map((image) => (
        <li key={image.id} onClick={() => onImageClick(image)} className={s.li}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
