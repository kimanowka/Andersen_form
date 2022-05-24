import React, { Component } from "react";
import styles from "./App.module.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import TextArea from "./components/TextArea/TextArea";

const createDebounceFunction = (func, wait) => {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
      inputSecondName: "",
      inputDate: "",
      inputTel: "",
      inputUrl: "",
      textAboutSelf: "",
      textStack: "",
      textDescription: "",
      showData: {
        name: "",
        secondName: "",
        date: "",
        tel: "",
        url: "",
        about: "",
        stack: "",
        description: "",
      },
    };
  }

  handleInputName = createDebounceFunction(({ target: { value } }) => {
    this.setState({
      inputName: value,
    });
  }, 200);
  handleInputSecondName = createDebounceFunction(({ target: { value } }) => {
    this.setState({
      inputSecondName: value,
    });
  }, 200);
  handleInputDate = createDebounceFunction(({ target: { value } }) => {
    this.setState({
      inputDate: value,
    });
  }, 200);
  handleInputTel = createDebounceFunction(({ target: { value } }) => {
    if (typeof Number(value) === "number") {
      this.setState({
        inputTel: value,
      });
    }
  }, 200);

  handleInputUrl = createDebounceFunction(({ target: { value } }) => {
    this.setState({
      inputUrl: value,
    });
  }, 200);
  handleTextAbout = createDebounceFunction(({ target: { value } }) => {
    this.setState({
      textAboutSelf: value,
    });
  }, 200);
  handleTextStack = createDebounceFunction(({ target: { value } }) => {
    this.setState({
      textStack: value,
    });
  }, 200);
  handleTextDescription = createDebounceFunction(({ target: { value } }) => {
    this.setState({
      textDescription: value,
    });
  }, 200);
  handleClickSave = () => {
    this.setState({
      inputName: "",
      inputSecondName: "",
      inputDate: "",
      inputTel: "",
      inputUrl: "",
      textAboutSelf: "",
      textStack: "",
      textDescription: "",
      showData: {
        name: this.state.inputName,
        secondName: this.state.inputSecondName,
        date: this.state.inputDate,
        tel: this.state.inputTel,
        url: this.state.inputUrl,
        about: this.state.textAboutSelf,
        stack: this.state.textStack,
        description: this.state.textDescription,
      },
    });
    console.log(this.state.showData);
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <Input
            type="text"
            label="Имя"
            placeholder="Введите своё имя"
            value={this.inputName}
            onChange={this.handleInputName}
          />
          <Input
            type="text"
            label="Фамилия"
            placeholder="Введиите свою фамилию"
            value={this.inputSecondName}
            onChange={this.handleInputSecondName}
          />
          <Input
            type="date"
            label="Дата рождения"
            placeholder="Ваша дата рождения"
            value={this.inputDate}
            onChange={this.handleInputDate}
          />
          <Input
            type="number"
            label="Контактный телефон"
            placeholder="Введите ваш телефон"
            value={this.inputTel}
            onChange={this.handleInputTel}
          />
          <Input
            type="url"
            label="Ваш сайт"
            placeholder="Введите ваш сайт"
            value={this.inputUrl}
            onChange={this.handleInputUrl}
          />
          <TextArea
            placeholder="О себе"
            rows="7"
            onChange={this.handleTextAbout}
          />
          <TextArea
            placeholder="Стек технологий"
            rows="7"
            onChange={this.handleTextStack}
          />
          <TextArea
            placeholder="Описание последнего проекта"
            rows="7"
            onChange={this.handleTextDescription}
          />
          <Button
            type="button"
            name="Сохранить"
            onClick={this.handleClickSave}
            disabled={this.disabled}
          />
          <Button type="reset" name="Отменить" />
        </form>
      </div>
    );
  }
}
