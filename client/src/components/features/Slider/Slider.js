import React from 'react';
import styles from './Slider.scss';
class Slider extends React.Component {
    constructor() {
     super()
     this.state = { current: 0}

    }

    render() {
    const { current } = this.state
        return (
        <div className={styles.Slider}>
        <div className={styles.SliderWrapper}>
            <div className={styles.Slides}>
                 {current}
            </div>
        </div>
            <div className={styles.arrowLeft} />
            <div className={styles.arrowRight} />
        </div>
            
  )}
}
export default Slider;