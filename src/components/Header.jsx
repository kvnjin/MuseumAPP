import { useState } from 'react';
import styles from '../css/Header.module.css';

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };



  return (
    <div className={styles.header}>
      <div className={styles.siteTitle}>
        <p>Rijksmuseum</p>
      </div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="For ArtWorks"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
          className={styles.searchBar}
        />
        <button onClick={handleSearch} className={styles.searchBtn}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Header;
