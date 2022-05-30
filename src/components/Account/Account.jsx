import React, { Component } from "react";
import Button from "../Button/Button";
import styles from "./Account.module.css";
export default class Account extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div>
          <h3>Имя:</h3> {this.props.name}
        </div>
        <div>
          <h3>Фамилия:</h3> {this.props.secondName}
        </div>
        <div>
          <h3> Сайт:</h3>
          {this.props.url}
        </div>
        <div>
          <h3> Дата рождения:</h3>
          {this.props.date}
        </div>
        <div>
          <h3>Мобильный телефон:</h3>
          {this.props.tel}
        </div>
        <div>
          <h3> О себе:</h3>
          {this.props.textAboutSelf}
        </div>
        <div>
          <h3>Используемый стек:</h3> {this.props.textStack}
        </div>
        <div>
          <h3> Описание последнего проекта:</h3>
          {this.props.textDescription}
        </div>
        <Button
          type="reset"
          name="Отменить"
          onClick={this.props.onClick}
        ></Button>
      </div>
    );
  }
}
