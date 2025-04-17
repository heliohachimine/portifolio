import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useRef, useState } from "react";

const BASE_DATA = [
  { name: "Comunicativo", level: 73 },
  { name: "Analitico", level: 85 },
  { name: "Proativo", level: 82 },
  { name: "Criativo", level: 70 },
  { name: "Flexivel", level: 75 },
  { name: "Colaborativo", level: 90 }
];

export default function SkillsRadarChart() {
  const [data, setData] = useState(BASE_DATA);
  const angle = useRef(0); // ângulo progressivo

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      angle.current += 0.02; // controla a velocidade (menor = mais lento)

      setData(
        BASE_DATA.map((item, i) => {
          const variation = Math.sin(angle.current + i) * 5; // oscilação cíclica
          return {
            ...item,
            level: item.level + variation,
          };
        })
      );

      animationFrame = requestAnimationFrame(animate);
    };

    animate(); // inicia a animação

    return () => cancelAnimationFrame(animationFrame); // limpa ao desmontar
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white/10 backdrop-blur rounded-xl shadow-lg mt-10">
      <h2 className="text-white text-2xl font-bold mb-6 text-center">Perfil</h2>
      <ResponsiveContainer width="100%" height={280}>
        <RadarChart data={data}>
          <PolarGrid stroke="#ccc" strokeDasharray="3 3" />
          <PolarAngleAxis dataKey="name" tick={{ fill: "#fff", fontSize: 12 }} />
          <Radar
            name="Habilidades"
            dataKey="level"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.6}
            isAnimationActive={false}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
