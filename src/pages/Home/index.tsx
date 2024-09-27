import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import Potable from "../../content/TypeWater/Potable.json";
import Gris from "../../content/TypeWater/Gris.json";
import Cruda from "../../content/TypeWater/Cruda.json";
import Residual from "../../content/TypeWater/Residual.json";
import Salada from "../../content/TypeWater/Salada.json";
import Subterranea from "../../content/TypeWater/Subterranea.json";
import Lluvia from "../../content/TypeWater/Lluvia.json";
import LeftStress from "../../content/WaterStress/LeftStress.json";
import RightStress from "../../content/WaterStress/RightStress.json";
import LeftShortage from "../../content/WaterShortage/LeftShortage.json"
import RightShortage from "../../content/WaterShortage/RightShortage.json"
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="image-banner.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="sobre-nosotros.svg"
        id="about"
      />
      <MiddleBlock
        title={'Tipos de Agua'}
        content={'Conoce sus diferencias y usos.'}
        button={'Empecemos'}
      />
      <ContentBlock
        direction="right"
        title={Potable.title}
        content={Potable.text}
        icon="agua-potable.svg"
        id="potable"
      />
      <ContentBlock
        direction="left"
        title={Gris.title}
        content={Gris.text}
        icon="agua-gris.svg"
        id="gris"
      />
      <ContentBlock
        direction="right"
        title={Cruda.title}
        content={Cruda.text}
        icon="agua-cruda.svg"
        id="cruda"
      />
      <ContentBlock
        direction="left"
        title={Residual.title}
        content={Residual.text}
        icon="agua-residual.svg"
        id="residual"
      />
      <ContentBlock
        direction="right"
        title={Salada.title}
        content={Salada.text}
        icon="agua-salada.svg"
        id="salada"
      />
      <ContentBlock
        direction="left"
        title={Subterranea.title}
        content={Subterranea.text}
        icon="agua-subterranea.svg"
        id="subterranea"
      />
      <ContentBlock
        direction="right"
        title={Lluvia.title}
        content={Lluvia.text}
        icon="agua-lluvia.svg"
        id="lluvia"
      />
      <MiddleBlock
        title={'¿Qué es el Estrés Hídrico?'}
        content={'El estrés hídrico es una realidad cada vez más alarmante: ocurre cuando la demenda de agua supera la cantidad disponible durante un período determinado, o cuando su calidad se ve comprometida. En otras palabras, es el momento en que nos quedamos sin suficiente agua limpia satisfacer las necesidades básicas de las personas, la agricultura y los sistemas.'}
        button={'Leer Más'}
      />
      <ContentBlock
        direction="left"
        title={LeftStress.title}
        content={LeftStress.text}
        icon="porque-deberia-importar.svg"
        id="estres-left"
      />
      <ContentBlock
        direction="right"
        title={RightStress.title}
        content={RightStress.text}
        icon="estres-hidrico.svg"
        id="estres-right"
      />
      <MiddleBlock
        title={'¿Qué es la Escasez de Agua?'}
        content={'La escasez de agua es uno de los desafíos más graves que enfrenta el mundo hoy en día. Se produce cuando la disponibilidad de agua dulce es insuficiente para satisfacer las necesidades de una población o cuando la calidad del agua está tan deteriorada que no puede ser utilizada.'}
        button={'Leer Más'}
      />
      <ContentBlock
        direction="left"
        title={LeftShortage.title}
        content={LeftShortage.text}
        icon="escasez.svg"
        id="escasez-left"
      />
      <ContentBlock
        direction="right"
        title={RightShortage.title}
        content={RightShortage.text}
        icon="estres-hidrico-2.svg"
        id="escasez-right"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
