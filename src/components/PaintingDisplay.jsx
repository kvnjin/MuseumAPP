import { useState, useEffect } from 'react';
import styles from '/src/css/PaintingDisplay.module.css';

function PaintingDisplay() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 5; 
  const apiKey = import.meta.env.VITE_API_KEY

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&ps=100`
        );
        const result = await response.json();
        setData(result.artObjects || []); 
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); 
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div className={styles.error}>No data available</div>;
  }

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToFirstPage = () => {
    if (currentPage > 1) {
      setCurrentPage(1);
    }
  };

  const goToLastPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(totalPages);
    }
  }

  return (
    <div className={styles.paintingDisplayContainer}>
      <div className={styles.header}>
        <div className={styles.siteTitle}>
          <p>Rijksmuseum</p>
        </div>
      </div>

      <div className={styles.imageGrid}>
        {currentItems.map((e) => {
          const isPortrait = e.webImage.width < e.webImage.height;
          const portraitClass = isPortrait ? styles.portrait : styles.landscape;
          return (
            <div key={e.id} className={`${styles.paintingDisplay} ${portraitClass}`}>
              <img src={e.webImage.url} alt={e.title} />
              <p className={styles.title}>{e.title}</p>
              <p className={styles.author}>{e.principalOrFirstMaker}</p>
            </div>
          );
        })}
      </div>

      <div className={styles.pagination}>
        <button onClick={goToFirstPage} disabled={currentPage === 1}>
          First
        </button>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        &#8592;
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
        &#8594;
        </button>
        <button onClick={goToLastPage} disabled={currentPage === totalPages}>
          Last
        </button>
      </div>
    </div>
  );
}

export default PaintingDisplay;
