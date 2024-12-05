import { useState, useEffect } from 'react';
import styles from '/src/css/PaintingDisplay.module.css';

function PaintingDisplay({ currentItems }) {

  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (image) => {
    console.log("image :", image)
    setSelectedImage(image)
  }

  const closePopup = () => {
    setSelectedImage(null)
  }

  if (!currentItems || currentItems.length === 0) {
    return <div className={styles.error}>No data available</div>;
  }

  return (
    <div className={styles.paintingDisplayContainer}>
      
      <div className={styles.imageGrid}>
        {currentItems.map((e) => {
          const isPortrait = e.webImage.width < e.webImage.height;
          const portraitClass = isPortrait ? styles.portrait : styles.landscape;
          return (
            <div 
            key={e.id} 
            className={`${styles.paintingDisplay} ${portraitClass}`} 
            onClick={() => openPopup(e)}>
              <img src={e.webImage.url} alt={e.title} />
              <p className={styles.title}>{e.title}</p>
              <p className={styles.author}>{e.principalOrFirstMaker}</p>
            </div>
          );
        })}

        {selectedImage && (
          <div className={styles.popupOverlay}>
              <button className={styles.closeButton} onClick={closePopup}>
                &times; 
              </button>
              <img
                src={selectedImage.webImage.url}
                className={styles.fullscreenImage}
              />
              <p className={styles.popupTitle}>{selectedImage.title}</p>
              <p className={styles.popupAuthor}>{selectedImage.principalOrFirstMaker}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaintingDisplay;
