import React, { Component } from "react";

class Sectiontwo extends Component {
  render() {
    return (
      <section className='section_two'>
        <div className='text_center'>
          <h2>Теперь ты свободен</h2>
          <img src={require("./svg-icon/sock.svg")} alt='Картинка' />
        </div>
        <div className='center_section_element'>
          <div className='left_items'>
            <span>1</span>
            <form>
              <p>Заполни поля в форме</p>
              <div className='form-group'>
                <label htmlFor='' />
                <textarea className='form-control' name='' id='' rows='3' />
              </div>
            </form>
          </div>
          <div className='right_items'>
            <form>
              <p>Получи смету на почту</p>
              <div className='form-group'>
                <label htmlFor='' />
                <textarea className='form-control' name='' id='' rows='3' />
              </div>
            </form>
            <span>2</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Sectiontwo;
