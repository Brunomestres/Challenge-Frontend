import { Container } from "./style";
import { About } from "../../components/About";
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <Container>
      <Header />
      <About />
    </Container>
  );
};
