import React from 'react';
import { Link } from 'react-router-dom';

const ModalJS = ({ open, onClose }) => {
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
            <h1>JavaScript</h1>
            <p>JavaScript - прототипно-орієнтована скриптова мова програмування.
                Найширшее застосування знаходить в браузерах як мова сценаріїв для
                надання інтерактивності веб-сторінок.
                Специфікація (формальний опис синтаксису, базових об'єктів і
                алгоритмів) мови JavaScript називається ECMAScript.
                Сучасний стандарт -
                це ЕСМА-262 5.1. Він підтримується всіма сучасними браузерами, крім
                Internet Explorer &lt; 9. Стандарт для JavaScript не називається просто
                JavaScript тому, що JavaScript&#8482; - зареєстрована торгова марка, що
                належить корпорації Oracle. ECMAScript було обрано, щоб зберегти
                специфікацію незалежної від власників торгової марки.
                Скрипт - це послідовність команд певному виконавцю, що їх виконує.
                JS cкрипти - це послідовність операторів, що вказують браузеру як
                відображати веб-сторінку.
                  </p>
            <Link to="/js">
            <button class="modalButton" onClick={onClose}>Читати більше</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalJS;