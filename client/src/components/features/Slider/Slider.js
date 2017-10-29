import React from 'react';
import styles from './Slider.scss';
import { Card, Button, Input } from 'semantic-ui-react'
class Slider extends React.Component {
    constructor() {
     super()
     this.state = {
         current: 0,
         item: 'https://ru.touhouwiki.net/images/1/15/Th07Chen.png',
         
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
            this.setState({ [e.target.name]: e.target.value })
        };
    render() {
    const { current } = this.state
      
    return (
      <div>
        <div className="field"> {this.state.item !== '' && <img src={this.state.item} className="ui small bordered image" />}</div>
        <input
                name='item'
                placeholder='item:'
                value={this.state.item}
                onChange={this.onChange}>
             </input>
        <Button basic inverted color='teal' onClick={() => this.setState({item: ''})}>
        Change
      </Button>
        <div className={styles.Slider}> 
        <div className={styles.SliderWrapper}> 
            <div className={styles.Slides}>
                 {current}
            </div>
        </div>
            <div className={styles.arrowLeft} />
            <div className={styles.arrowRight} />
        </div>
        </div>
            
  )}
}
export default Slider;