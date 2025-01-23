import React from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { Image } from "../types";

Modal.setAppElement("#root");

interface ImageModalProps {
  image: Image;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => (
  <Modal
    isOpen={true}
    onRequestClose={onClose}
    contentLabel="Image Modal"
    className={s.modal}
  >
    <div onClick={onClose} className={s.box}>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={s.img}
      />
      <div className={s.info}>
        <p className={s.p}>
          <b>Author:</b>
          {image.user.first_name} <span>{image.user.last_name}</span>
        </p>
        <p className={s.p}>
          <b>Likes:</b>
          {image.likes}
        </p>
      </div>
    </div>
  </Modal>
);

export default ImageModal;
