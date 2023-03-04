import AboutImage from "../../assets/Rectangle.png";
import { Content, Image, Description } from "./style";
export const About = () => {
  return (
    <Content>
      <Image src={AboutImage} />
      <Description>
        <h6>
          {"<"} 11 e 12 de Março {">"}<br />
           Aluródromo de São Paulo
        </h6>
        <p>
          Hora de programar nossa memória com novas lembranças! Uma nova
          experiência sobre música, linguagens e, claro, tecnologia! Somos um
          festival diverso, com vários artistas e referências. Divirta-se!
        </p>
        <div className="ticket">
        Comprar ingresso!
        </div>
      </Description>
    </Content>
  );
};
