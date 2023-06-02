import React , { useState } from "react";
import ModalHTML from "../Modal/ModalHTML";
import ModalCSS from "../Modal/ModalCSS";
import ModalJS from "../Modal/ModalJS";
import AboutUs from "../AboutUs/AboutUs";
const Main = () => {
    const [openModalHtml, setOpenModalHtml] = useState(false);
    const [openModalCss, setOpenModalCss] = useState(false);
    const [openModalJs, setOpenModalJs] = useState(false);

    return(
        <div>
            <div className="container">
                <h1>Web Portal</h1>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

                <p className="text_home"> Вітаємо на навчальному порталі з веб-технологій! 
Онлайн-освіта - одна з прогресивних форм навчання. На сучасному етапі розвитку вищої освіти проблема використання дистанційних технологій в процесі підготовки висококваліфікованих спеціалістів в українських університетах набуває особливої актуальності. 
Дистанційне навчання потребує нових способів та засобів обміну інформацією, тому даний навчальний портал має на меті допомогти викладачам та студентам у процесі вивчення веб-технологій та мати доступ до необхідних навчальних матеріалів в будь-якому місці та в будь-який час.</p>
            </div>
            {/* HTML */}
      <div className="modal-btns">
        <button
          onClick={() => setOpenModalHtml(true)} 
          className='modalButton'>
            HTML
        </button>
        <ModalHTML 
        open={openModalHtml} 
        onClose={() => setOpenModalHtml(false)} />
        {/* CSS */}
        <button 
        onClick={() => setOpenModalCss(true)} 
        className='modalButton'>
          CSS
        </button>
        <ModalCSS 
        open={openModalCss} 
        onClose={() => setOpenModalCss(false)} />
        {/* JS */}
        <button 
        onClick={() => setOpenModalJs(true)} 
        className='modalButton'>
          JS
        </button>
        <ModalJS 
        open={openModalJs} 
        onClose={() => setOpenModalJs(false)} />
      </div>
      <AboutUs />
        </div>
    );
};

export default Main;