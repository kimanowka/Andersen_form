import React, { Component } from "react";
import styles from "./Input.module.css";

class Input extends Component {
  render() {
    return (
      <label className={styles.wrapper}>
        {this.props.label}
        <input
          type={this.props.type}
          name={this.props.label}
          value={this.props.inputText}
          placeholder={this.props.placeholder}
          className={styles.input}
          onChange={this.props.onChange}
        />
      </label>
    );
  }
}

export default Input;
