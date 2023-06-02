import React from 'react';
import { Link } from "react-router-dom";
const ModalHTML = ({ open, onClose }) => {
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
            <h1>HTML</h1>
            <p>HTML (Hyper Text Markup Language) – стандартна мова розмітки документів в Інтернеті. <br></br>
Елементи HTML — основні компоненти мови розмітки HTML. Елементи є ієрархічними, тобто для них визначено поняття батька та нащадків. Всі елементи на сторінці є прямими чи непрямими нащадками головного елемента HTML.
Кожен елемент має свою унікальну назву, яка записується латинськими літерами і не чутлива до їх регістру. В загальному вигляді елемент має три складові: теги (початковий та кінцевий), атрибути та зміст (контент).
</p>
            <Link to="/html">
            <button class="modalButton" onClick={onClose}>Читати більше</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalHTML;