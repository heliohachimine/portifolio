// Details.jsx
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-16">
      <motion.div
        layoutId={`card-${id}`}
        className="bg-white text-white p-10 rounded-lg"
      >
        <h2>Detalhes do {id}</h2>
        <p>Conteúdo da nova página aqui...</p>
        <button
          className="mt-4 bg-white text-blue-500 px-4 py-2 rounded"
          onClick={() => navigate(-1)}
        >
          Voltar
        </button>
      </motion.div>
    </div>
  );
}
