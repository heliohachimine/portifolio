// src/components/CurriculumCards.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CurriculumCards() {
  const topics = [
    {
      id: 1,
      title: "Experiência Profissional",
      description:
        "Mais de 5 anos desenvolvendo aplicativos mobile com foco em performance.",
      icon: "💼",
    },
    {
      id: 2,
      title: "Educação",
      description:
        "Bacharelado em Engenharia da Computação pelo Instituto Federal do Triângulo Mineiro",
      icon: "🎓",
    },
    {
      id: 3,
      title: "Habilidades Técnicas",
      description: "Flutter, Kotlin, Swift, TypeScript, Node.js, e mais.",
      icon: "🛠️",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-center px-4 py-12">
      {topics.map((topic, index) => (
        <Link key={topic.id} to={`/details/${topic.id}`}>
          <motion.div
            key={index}
            layoutId={`card-${topic.id}`}
            className="bg-white text-blue-900 rounded-2xl shadow-xl p-8 w-[90vw] max-w-sm md:max-w-md md:w-full flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] min-h-[260px]"
          >
            <div className="text-6xl mb-6">{topic.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{topic.title}</h3>
            <p className="text-gray-700 text-base">{topic.description}</p>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
