import React, { Component } from "react";
import styles from "./TextArea.module.css";
class TextArea extends Component {
  render() {
    return (
      <textarea
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        className={styles.textArea}
      />
    );
  }
}

export default TextArea;
