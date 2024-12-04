import PaintingDisplay from "./PaintingDisplay";
import styles from '/src/css/ImageContainer.module.css';

function ImageContainer() {
  return (
    <div className={styles.imageContainer}>
        <PaintingDisplay
        />
    </div>
  );
}

export default ImageContainer;