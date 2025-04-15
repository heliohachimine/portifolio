import "./Hobbies.css";
import Lottie from "lottie-react";
import { useRef } from "react";
import coffeeAnim from "../assets/lottie/coffee.json";
import plantAnim from "../assets/lottie/plant.json";
import fishAnim from "../assets/lottie/fish.json";
import diceAnim from "../assets/lottie/dice.json";

const hobbies = [
  {
    id: 1,
    title: "Cafés Especiais",
    description:
      "Aprecio descobrir novos sabores e métodos de preparo, sempre buscando um café de qualidade.",
    icon: "☕",
    animation: coffeeAnim,
  },
  {
    id: 2,
    title: "Cuidar de Plantas",
    description:
      "Adoro cultivar e cuidar de plantas, trazendo mais vida e natureza para o meu ambiente.",
    icon: "🌱",
    animation: plantAnim,
  },
  {
    id: 4,
    title: "Board Games",
    description:
      "Sou fã de jogos de tabuleiro e adoro reunir amigos para partidas estratégicas e divertidas.",
    icon: "🎲",
    animation: diceAnim,
  },
];

const Hobbies = () => {
  // Vamos criar um mapa de refs para cada hobby com animação
  const lottieRefs = useRef({});

  return (
    <div className="hobbies-section">
      <h2>Meus Hobbies</h2>
      <div className="hobbies-list">
        {hobbies.map((hobby) => (
          <div
            key={hobby.id}
            className="hobby"
            onMouseEnter={() => {
              if (hobby.animation && lottieRefs.current[hobby.id]) {
                lottieRefs.current[hobby.id].play();
              }
            }}
            onMouseLeave={() => {
              if (hobby.animation && lottieRefs.current[hobby.id]) {
                lottieRefs.current[hobby.id].stop();
              }
            }}
          >
            {hobby.animation && (
              <Lottie
                lottieRef={(ref) => (lottieRefs.current[hobby.id] = ref)}
                animationData={hobby.animation}
                loop
                autoplay={true}
                style={{ width: 200, height: 200 }}
              />
            )}
            <div className="hobby-info">
              <h3>{hobby.title}</h3>
              <p>{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
