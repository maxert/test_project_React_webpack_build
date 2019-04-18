import React, { Component } from "react";

class Sectionone extends Component {
  render() {
    return (
      <section className='section_one'>
        <div className='center_content'>
          <img src={require("./img/main-illustration.png")} className='' alt='Картинка' />
          <h1>Смета на сайт за 499₽</h1>
          <h3>Наш сервис сэкономит ваше время или время вашего менеджера на создание сметы для разработки сайта. Получите готовый документ в 1 клик.</h3>
          <button>Как получить?</button>
        </div>
      </section>
    );
  }
}

export default Sectionone;
