import React, { Component } from "react";

class Sectionthree extends Component {
  render() {
    return (
      <section className='section_three'>
      <img src={require("./img/illustration-girl.png")} alt="Картинка"></img>
        <div className='center_content'>
          <h3>Заполни поля и наш менеджер свяжется с тобой для уточнения данных</h3>
          <form>
            <div>
              <div className='form-group'>
                <input type='text' className='form-control' name='name' id='' aria-describedby='helpId' placeholder='Ваше имя' />
              </div>
              <div className='form-group'>
                <input type='text' className='form-control' name='telephone' id='' aria-describedby='helpId' placeholder='Телефон' />
              </div>
              <div className='form-group'>
                <input type='email' className='form-control' name='email' id='' aria-describedby='helpId' placeholder='Email' />
              </div>
              <button type='button' >Отправить</button>
            </div>
          </form>
        </div>
        <div className='left_content'>
          <img src={require("./svg-icon/ik-question.svg")} alt='Картинка' />
          <p>есть<br></br> вопрос?</p>
        </div>
        <img src={require("./svg-icon/illistration.svg")} alt="Картинка"></img>
      </section>
    );
  }
}

export default Sectionthree;
