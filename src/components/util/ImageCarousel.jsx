/* eslint-disable react/prop-types */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./ImageCarousel.module.css";

const ImageCarousel = ({ images, selectedImageIndex }) => {
  return (
    <Carousel
      selectedItem={selectedImageIndex}
      showArrows={true}
      showThumbs={false}
      dynamicHeight={true}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Slide ${index}`}
            className={styles.carouselImage}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
