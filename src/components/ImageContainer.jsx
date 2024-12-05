import PaintingDisplay from "./PaintingDisplay";
import styles from '/src/css/ImageContainer.module.css';
import Header from "./Header";
import Pagination from "./Pagination";
import { useState } from "react";

function ImageContainer({data, onSearch }) {
  
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 5; 
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);
  const handleSearch = (searchTerm) => {
    onSearch(searchTerm);
    setCurrentPage(1); 
  };


  
  return (
    <div className={styles.imageContainer}>

      <Header
        onSearch={handleSearch}
      />

      <PaintingDisplay
        currentItems={currentItems}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
      
    </div>
  );
}

export default ImageContainer;