import { motion } from "framer-motion";
import SkillsChart from "./SkillChart";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-sky-900 via-blue-800 to-blue-900 text-white flex items-center justify-center px-4 py-12">
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-5 gap-10 items-center"
>
        {/* Texto */}
        <div className="text-center md:text-left px-4 md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Olá, eu sou</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Hélio H. Hachimine Jr.</h1>
          <p className="text-blue-200 text-lg md:text-xl">
            Desenvolvedor Mobile com foco em experiência e performance.
          </p>

          <button className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full text-white font-medium transition">
            Download CV
          </button>
        </div>

        {/* Avatar */}
        <div className="flex justify-center md:col-span-1">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white overflow-hidden shadow-xl">
            <img
              src="/avatar.jpeg"
              alt="Helio Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Skills */}
        <div className="flex justify-center md:justify-end px-4 md:col-span-2">
          <SkillsChart />
        </div>
      </motion.div>
    </section>
  );
}
