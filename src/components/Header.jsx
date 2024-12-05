import styles from '../css/Header.module.css';
// import { useEffect, useState } from 'react';

function Header({ searchData }) {

  
    return (
        <div className={styles.header}>
        <div className={styles.siteTitle}>
          <p>Rijksmuseum</p>
        </div>
        <div className={styles.search}>
        <input type="text" placeholder='Search...' className={styles.searchBar}/>
        <button className={styles.searchBtn}>Search</button>
        <button className={styles.clearBtn}>Clear</button>
        </div>
      </div>
    )
}

export default Header;