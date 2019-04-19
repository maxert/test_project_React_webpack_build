import React, { Component } from "react";

class Sectionthree extends Component {
  render() {
    return (
      <section className='section_three'>
      <img className="section-three__left_img" src={require("./img/illustration-girl.png")} alt="Картинка"></img>
        <div className='section-three__center_content'>
          <h3>Заполни поля и наш менеджер свяжется с тобой для уточнения данных</h3>
          <form>
            <div>
              <div className='form_container'>
                <input type='text' className='form_container__input' name='name' id='' placeholder='Ваше имя' />
              </div>
              <div className='form_container'>
                <input type='text' className='form_container__input' name='telephone' id=''  placeholder='Телефон' />
              </div>
              <div className='form_container'>
                <input type='email' className='form_container__input' name='email' id=''placeholder='Email' />
              </div>
              <button type='button' >Отправить</button>
            </div>
          </form>
        </div>
        <div className='section-three_right_bottom_text'>
          <img  src={require("./svg-icon/ik-question.svg")} alt='Картинка' />
          <p>есть<br></br> вопрос?</p>
        </div>
        <img className="section-three_right_img" src={require("./svg-icon/illistration.svg")} alt="Картинка"></img>
      </section>
    );
  }
}

export default Sectionthree;
