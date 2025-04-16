import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Comunicação", level: 73 },
  { name: "Lógica", level: 85 },
  { name: "Proativo", level: 82 },
  { name: "Criativo", level: 70 },
  { name: "Flexivel", level: 75 },
];

export default function SkillsRadarChart() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white/10 backdrop-blur rounded-xl shadow-lg mt-10">
      <h2 className="text-white text-2xl font-bold mb-6 text-center">Perfil</h2>
      <ResponsiveContainer width="100%" height={280}>
        <RadarChart data={data}>
          <PolarGrid stroke="#ccc" strokeDasharray="3 3" />
          <PolarAngleAxis dataKey="name" tick={{ fill: "#fff", fontSize: 12 }} />
          {/* PolarRadiusAxis removido para esconder os números */}
          <Radar
            name="Habilidades"
            dataKey="level"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
