import { Card } from "./components/Card/Card";

export default function App() {
  return (
    <>
      <Card
        age={19}
        imagem="../public/fotoDePerfil.jpg"
        firstName="Gustavo"
        LinkedInUrl="https://www.linkedin.com/in/gustavormendess/"
        bio="Full Stack Developer "
      />
    </>
  );
}
