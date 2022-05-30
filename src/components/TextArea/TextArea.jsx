import React, { Component } from "react";
import styles from "./TextArea.module.css";
class TextArea extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <textarea
          placeholder={
            !this.props.isError
              ? this.props.placeholder
              : "Поле пустое. Заполните,пожалуйста"
          }
          onChange={this.props.onChange}
          className={this.props.isError ? styles.error : styles.textArea}
          onBlur={this.props.onBlur}
        />
        <span>
          {this.props.count > 600
            ? "Превышен лимит символов в поле»"
            : `Осталось ${600 - this.props.count}/600 символов`}
        </span>
      </div>
    );
  }
}

export default TextArea;
