/* eslint-disable react/prop-types */
import ImageCarousel from "./ImageCarousel";
import styles from "./Modal.module.css";

const Modal = ({ images, selectedImageIndex, onClose }) => {
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <ImageCarousel
          images={images}
          selectedImageIndex={selectedImageIndex}
        />
      </div>
      <button className={styles.closeButton} onClick={onClose}>
        Fechar
      </button>
    </div>
  );
};

export default Modal;
