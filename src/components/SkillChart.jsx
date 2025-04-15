import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Comunicação", level: 73 },
  { name: "Raciocinio Lógico", level: 85 },
  { name: "Proatividade", level: 80 },
  { name: "Criatividade", level: 66 },
  { name: "Flexibilidade", level: 75 },
];

const COLORS = [
  "#3b82f6", // blue-500
  "#6366f1", // indigo-500
  "#9333ea", // purple-600
  "#14b8a6", // teal-500
  "#eab308", // yellow-500
  "#f43f5e", // rose-500
];

export default function SkillsChart() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white/10 backdrop-blur rounded-xl shadow-lg mt-10">
      <h2 className="text-white text-2xl font-bold mb-6 text-center">Perfil</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
        >
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis dataKey="name" type="category" stroke="#fff" />
          <Bar dataKey="level" barSize={20} radius={[0, 10, 10, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
