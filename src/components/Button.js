import React, { Component } from 'react';
import './Button.css';
import styles from './Button.module.css';

export default class Button extends Component {
  render() {
    return (
      <div className="Button">
        <div className={styles.Button} />
      </div>
    );
  }
}
