import styles from '/src/css/PaintingDisplay.module.css';
// import { useEffect, useState } from 'react';
import data from '/public/infosMockAPI.json';


function PaintingDisplay(){
    return (
      <>
      { data.artObjects.map((e) => (
        <div key={e.id} className={styles.paintingDisplay}>
          <img src={e.webImage.url}/>
          <p className={styles.title}>{e.title}</p>
          <p className={styles.author}>{e.principalOrFirstMaker}</p>
        </div>
       ))}  
      </>
  )
}

export default PaintingDisplay;