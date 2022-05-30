import React, { Component } from "react";
import styles from "./App.module.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import TextArea from "./components/TextArea/TextArea";
import Account from "./components/Account/Account";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameBlur: false,
      secondName: "",
      secondNameBlur: false,
      date: "",
      dateBlur: false,
      tel: "",
      telBlur: false,
      url: "",
      urlBlur: false,
      textAboutSelf: "",
      aboutBlur: false,
      textStack: "",
      stackBlur: false,
      textDescription: "",
      descriptionBlur: false,
      isErrorName: "",
      isErrorSecondName: "",
      isErrorDate: "",
      isErrorTel: "",
      isErrorUrl: "",
      isErrorAbout: "",
      isErrorStack: "",
      isErrorDescription: "",
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
      visible: false,
    };
  }

  handleInputName = ({ target: { value } }) => {
    const result = value[0].toUpperCase() + value.slice(1);
    this.setState({
      name: result.trim(),
    });
  };
  handleInputSecondName = ({ target: { value } }) => {
    const result = value[0].toUpperCase() + value.slice(1);
    this.setState({
      secondName: result.trim(),
    });
  };

  handleClickSave = (e) => {
    e.preventDefault();
    if (this.state.name === "") {
      this.setState({
        isErrorName: "Поле обязательно для заполнения",
      });
    } else {
      this.setState({
        isErrorName: "",
      });
    }
    if (this.state.secondName === "") {
      this.setState({
        isErrorSecondName: "Поле обязательно для заполнения",
      });
    } else {
      this.setState({
        isErrorSecondName: "",
      });
    }
    if (this.state.date === "") {
      this.setState({
        isErrorDate: "Поле обязательно для заполнения",
      });
    } else {
      this.setState({
        isErrorDate: "",
      });
    }
    if (this.state.tel === "" || this.state.tel.length > 12) {
      this.setState({
        isErrorTel: "Поле обязательно для заполнения",
      });
    } else {
      this.setState({
        isErrorTel: "",
      });
    }
    if (!this.state.url.startsWith("https://") || this.state.url === "") {
      this.setState({
        isErrorUrl:
          'Поле обязательно для заполнения и должно начинаться с "https://',
      });
    } else {
      this.setState({
        isErrorUrl: "",
      });
    }
    if (this.state.textAboutSelf === "") {
      this.setState({
        isErrorAbout: "Поле обязательно для заполнения",
      });
    } else {
      this.setState({
        isErrorAbout: "",
      });
    }
    if (this.state.textStack === "") {
      this.setState({
        isErrorStack: "Поле обязательно для заполнения",
      });
    } else {
      this.setState({
        isErrorStack: "",
      });
    }
    if (this.state.textDescription === "") {
      this.setState({
        isErrorDescription: "Поле обязательно для заполнения",
      });
    } else {
      this.setState({
        isErrorDescription: "",
      });
    }
    if (
      this.state.nameBlur &&
      this.state.secondNameBlur &&
      this.state.dateBlur &&
      this.state.telBlur &&
      this.state.urlBlur &&
      this.state.aboutBlur &&
      this.state.stackBlur &&
      this.state.descriptionBlur &&
      this.state.isErrorName === "" &&
      this.state.isErrorSecondName === "" &&
      this.state.isErrorDate === "" &&
      this.state.isErrorTel === "" &&
      this.state.isErrorUrl === "" &&
      this.state.isErrorAbout === "" &&
      this.state.isErrorStack === "" &&
      this.state.isErrorDescription === ""
    ) {
      this.setState({
        visible: true,
      });
    } else {
      this.setState({
        visible: false,
      });
    }
  };
  handleClickReset = (e) => {
    e.preventDefault();
    this.setState({
      name: "",
      nameBlur: false,
      secondName: "",
      secondNameBlur: false,
      date: "",
      dateBlur: false,
      tel: "",
      telBlur: false,
      url: "",
      urlBlur: false,
      textAboutSelf: "",
      aboutBlur: false,
      textStack: "",
      stackBlur: false,
      textDescription: "",
      descriptionBlur: false,
      isErrorName: "",
      isErrorSecondName: "",
      isErrorDate: "",
      isErrorTel: "",
      isErrorUrl: "",
      isErrorAbout: "",
      isErrorStack: "",
      isErrorDescription: "",
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
      visible: false,
    });
  };
  render() {
    return (
      <div className={styles.wrapper}>
        {this.state.visible ? (
          <Account {...this.state} onClick={this.handleClickReset} />
        ) : (
          <form className={styles.form}>
            <Input
              type="text"
              label="Имя"
              placeholder="Введите своё имя"
              value={this.state.name}
              isError={this.state.isErrorName}
              onBlur={() => {
                this.setState({ nameBlur: true });
              }}
              onChange={this.handleInputName}
            />
            <Input
              type="text"
              label="Фамилия"
              placeholder="Введиите свою фамилию"
              value={this.state.secondName}
              isError={this.state.isErrorSecondName}
              onChange={this.handleInputSecondName}
              onBlur={() => {
                this.setState({ secondNameBlur: true });
              }}
            />

            <Input
              type="date"
              label="Дата рождения"
              placeholder="Ваша дата рождения"
              value={this.state.date}
              isError={this.state.isErrorDate}
              onChange={(e) => {
                this.setState({
                  date: e.target.value.trim(),
                });
              }}
              onBlur={() => {
                this.setState({ dateBlur: true });
              }}
            />
            <Input
              type="tel"
              label="Контактный телефон"
              placeholder="Введите ваш телефон"
              value={this.state.tel}
              isError={this.state.isErrorTel}
              onChange={(e) => {
                this.setState({
                  tel: e.target.value.trim(),
                });
              }}
              onBlur={() => {
                this.setState({ telBlur: true });
              }}
            />
            <Input
              type="url"
              label="Ваш сайт"
              placeholder="Введите ваш сайт"
              value={this.state.url}
              isError={this.state.isErrorUrl}
              onChange={(e) => {
                this.setState({
                  url: e.target.value.trim(),
                });
              }}
              onBlur={() => {
                this.setState({ urlBlur: true });
              }}
            />
            <TextArea
              placeholder="О себе"
              rows="7"
              isError={this.state.isErrorAbout}
              onChange={(e) => {
                this.setState({
                  textAboutSelf: e.target.value.trim(),
                });
              }}
              count={this.state.textAboutSelf.length}
              onBlur={() => {
                this.setState({ aboutBlur: true });
              }}
            />
            <TextArea
              placeholder="Стек технологий"
              rows="7"
              isError={this.state.isErrorStack}
              onChange={(e) => {
                this.setState({
                  textStack: e.target.value.trim(),
                });
              }}
              count={this.state.textStack.length}
              onBlur={() => {
                this.setState({ stackBlur: true });
              }}
            />
            <TextArea
              placeholder="Описание последнего проекта"
              rows="7"
              isError={this.state.isErrorDescription}
              onChange={(e) => {
                this.setState({
                  textDescription: e.target.value.trim(),
                });
              }}
              count={this.state.textDescription.length}
              onBlur={() => {
                this.setState({ descriptionBlur: true });
              }}
            />
            <Button
              type="submit"
              name="Сохранить"
              onClick={this.handleClickSave}
            />
            <Button
              type="reset"
              name="Отменить"
              onClick={this.handleClickReset}
            />
          </form>
        )}
      </div>
    );
  }
}
