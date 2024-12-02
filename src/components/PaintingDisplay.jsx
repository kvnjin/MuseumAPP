import styles from '/src/css/PaintingDisplay.module.css';

function PaintingDisplay(){
    return (
      <div className={styles.paintingDisplay}>
        <img src="https://lh3.googleusercontent.com/SwwiVAxnwFE_s-k7-bPOZ6jnGfcuVDJoZ-ofLb0Zispb-mJdsfasrE1nTPRcGDPwyEqY0txKpjPcAWaIIltYvvPtDA8=s0"/>
        <p>Portrait of Don Ramón Satué</p>
        <p>Francisco de Goya</p>
      </div>

    );
}

export default PaintingDisplay;