import React, { Component } from "react";
import styles from "./Input.module.css";

export default class Error extends Component {
  render() {
    return <div className={styles.error}>{this.props.children}</div>;
  }
}
