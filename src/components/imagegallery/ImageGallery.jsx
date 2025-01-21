import "react";
import ImageCard from "../imagecard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
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
