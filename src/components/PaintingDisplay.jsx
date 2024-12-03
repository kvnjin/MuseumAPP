import styles from '/src/css/PaintingDisplay.module.css';
import { useEffect, useState } from 'react';

export default function Painting(){
  const [painting, setPainting] = useState([])
  
  useEffect(() => {
    fetch('/public/infosMockAPI.json')
    .then(response => response.json())
    .then(data => setPainting(data.artObjects))
    .catch(error => console.log(error))
  },[]);


function PaintingDisplay(){

  return painting.map((e) => {
    return (
      <>
       <div className={styles.paintingDisplay}>
        <img src={e.webImage.url}/>
        <p className={styles.title}>{e.title}</p>
        <p className={styles.author}>{e.principalOrFirstMaker}</p>
      </div>
      </>
     
  )
});
} 
return ( 
  <PaintingDisplay/>
);

}