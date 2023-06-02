import React from 'react';
import { Link } from 'react-router-dom';

const ModalCSS = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
          ❌
          </p>
          <div className='content'>
            <h1>CSS</h1>
            <p>Стиль – це набір правил оформлення та форматування, який можна застосувати до різних елементів веб-документа.<br></br>
            Каскадні таблиці стилів (CSS, Cascading Style Sheets) містять параметри форматування частини або всього тексту веб-сторінки. Таблиці каскадних стилів дають змогу визначити єдиний стиль оформлення для різних сторінок документа і швидко модифікувати його зміною відповідного параметра у таблиці стилів.<br></br>
            Параметрів форматування, які можна задавати за допомогою стилів, досить багато. Це, зокрема:<br></br>
            ●	background – колір тла;<br />
            ●	font-family – стиль шрифту (гарнітура);<br/>
            ●	font-size – розмір шрифту;<br />
            ●	font-weight – жирність шрифту;<br />
            ●	color – колір шрифту;<br />
            </p>
            <Link to="/css">
              <button class="modalButton" onClick={onClose}>Читати більше</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCSS;