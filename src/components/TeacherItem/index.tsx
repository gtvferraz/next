import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return(
  <article className="teacher-item">
    <header>
      <img src="https://pbs.twimg.com/media/DFjNBJ9XYAAL-j7.jpg" alt="Pintinho"/>
      <div>
        <strong>Pintinho Piu</strong>
        <span>Piu piu</span>
      </div>
    </header>

    <p>
      Piu piu piu piu piu piu piu piu.
      <br />
      Piu piu piu, piu piu piu!!!
      <br />
      Piu? Piu piu piu piu.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$2570,00</strong>
      </p>
      <button>
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;