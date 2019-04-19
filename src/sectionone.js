import React, { Component } from "react";

class Sectionone extends Component {
  render() {
    return (
      <section className='section_one'>
        <div className='section-one__center_content'>
          <img src={require("./img/main-illustration.png")} className='' alt='Картинка' />
          <h1>Смета на сайт за 499₽</h1>
          <h3>Наш сервис сэкономит ваше время или время вашего менеджера на создание сметы для разработки сайта. Получите готовый документ в 1 клик.</h3>
          <button className="button section-one__button_bottom">Как получить?</button>
        </div>
      </section>
    );
  }
}

export default Sectionone;
