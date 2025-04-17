import "./Hobbies.css";
import Lottie from "lottie-react";
import { useRef } from "react";
import coffeeAnim from "../assets/lottie/coffee.json";
import plantAnim from "../assets/lottie/plant.json";
import diceAnim from "../assets/lottie/dice.json";

const hobbies = [
  {
    id: 1,
    title: "Cafés Especiais",
    description:(
        <>
        Aprecio <b>descobrir novos sabores</b> e métodos de preparo, sempre buscando um café de <b>qualidade</b>.
        </>
    ),
    icon: "☕",
    animation: coffeeAnim,
  },
  {
    id: 2,
    title: "Cuidar de Plantas",
    description:(
        <>
        Adoro <b>cultivar e cuidar</b> de plantas, trazendo mais vida e natureza para o meu ambiente.
        </>
    ),
    icon: "🌱",
    animation: plantAnim,
  },
  {
    id: 4,
    title: "Board Games",
    description:(
        <>
        Sou fã de jogos de tabuleiro e adoro <b>reunir amigos</b> para partidas <b>estratégicas e divertidas</b>.
        </>
    ),
    icon: "🎲",
    animation: diceAnim,
  },
];

const Hobbies = () => {
  const lottieRefs = useRef({});

  return (
    <div className="hobbies-section">
<h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
  Coisas que me inspiram e refletem minha essência
</h2> <div className="hobbies-list">
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
              <p>{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
