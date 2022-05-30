import React, { Component } from "react";
import styles from "./Input.module.css";
import Error from "./Error";
class Input extends Component {
  render() {
    return (
      <label className={styles.wrapper}>
        {this.props.label}
        <input
          type={this.props.type}
          name={this.props.label}
          value={this.props.value}
          placeholder={this.props.placeholder}
          className={this.props.isError ? styles.input_error : styles.input}
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
        />
        {this.props.isError ? (
          <Error>Поле пустое. Заполните пожалуйста</Error>
        ) : null}
      </label>
    );
  }
}

export default Input;
