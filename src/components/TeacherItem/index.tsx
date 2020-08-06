import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/33449405?s=460&u=8f9343b4ae8971ebf54ba9f888525f8d86ef7a27&v=4" alt="Marcos Ferreira" />
        <div>
          <strong>Marcos Ferreira</strong>
          <span>Desenho</span>
        </div>
      </header>

      <p>
        Entusiasta de comics e mangás.
        <br />
        <br />
        Apaixonado por desenhos americanos e japoneses, tendo como robby desenhar e programar aplicações web.
      </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 40,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
