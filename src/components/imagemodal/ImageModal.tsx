import "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => (
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
          {image.user.first_name} <p>{image.user.last_name}</p>
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
