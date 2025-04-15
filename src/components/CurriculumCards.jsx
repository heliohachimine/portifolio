// src/components/CurriculumCards.jsx
import { motion } from "framer-motion";

export default function CurriculumCards() {
  const topics = [
    {
      title: "Experiência Profissional",
      description: "Mais de 5 anos desenvolvendo aplicativos mobile com foco em performance.",
      icon: "💼",
    },
    {
      title: "Educação",
      description: "Bacharelado em Engenharia da Computação pelo Instituto Federal do Triângulo Mineiro",
      icon: "🎓",
    },
    {
      title: "Habilidades Técnicas",
      description: "React Native, Flutter, TypeScript, Node.js, e mais.",
      icon: "🛠️",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-center px-4 py-12">
      {topics.map((topic, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-900 rounded-xl shadow-xl p-6 w-full md:w-1/3 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-2xl"
        >
          <div className="text-5xl mb-4">{topic.icon}</div>
          <h3 className="text-2xl font-semibold mb-2">{topic.title}</h3>
          <p className="text-gray-700">{topic.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
