import PaintingDisplay from "./PaintingDisplay";
import styles from '/src/css/PaintingDisplay.module.css';

function ImageContainer() {
  return (
    <div className={styles.ImageContainer}>
        <PaintingDisplay />
        <PaintingDisplay />
    </div>
  );
}

export default ImageContainer;