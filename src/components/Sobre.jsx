import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import aaImage from '../assets/aa.jpg';
import cachorroImage from '../assets/cachorro-abandonado.jpg';
import ods from '../assets/ods.jpg';
import ajuda from '../assets/ajuda.jpg';

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100vh',
      padding: '20px',
      boxSizing: 'border-box',
    },
    welcomeSection: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcomeText: {
      fontSize: '3rem',  // aumentei o tamanho para 3 rem
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '20px',  // espaço abaixo do texto de boas-vindas
    },
    descriptionText: {
      fontSize: '1.2rem',  // tamanho do texto descritivo
      textAlign: 'center',
      maxWidth: '600px',   // largura máxima para alinhar ao centro
      lineHeight: '1.6',
    },
    carouselSection: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  };

const TelaSobre = () => {
  return (
    <div style={styles.container}>
      <div style={styles.welcomeSection}>
        <h1 style={styles.welcomeText}>Seja bem-vindo!</h1>
        <div style={styles.descriptionText}>
          <p>
            PawsCare é um sistema abrangente para adoção de animais que visa oferecer suporte às ONGs e facilitar o envolvimento de voluntários.
            Somos uma plataforma simples, porém eficaz, que permite às ONGs encontrar lares amorosos para os animais sob seus cuidados, contribuindo assim para a promoção da saúde dos animais (ODS 3) e para a conservação da vida terrestre (ODS 15), enquanto também promove o engajamento da comunidade por meio do voluntariado.
          </p>
        </div>
      </div>
      <div style={styles.carouselSection}>
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
          <div>
            <img src={aaImage} alt="Imagem 1" />
          </div>
          <div>
            <img src={cachorroImage} alt="Imagem 2" />
          </div>
          <div>
            <img src={ods} alt="Imagem 3" />
          </div>
          <div>
            <img src={ajuda} alt="Imagem 4" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TelaSobre;
