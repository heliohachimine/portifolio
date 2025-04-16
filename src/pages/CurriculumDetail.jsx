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
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.95 }} // <- animação de volta
         transition={{ duration: 0.3 }}
         className="max-w-2xl mx-auto mt-10 p-8 rounded-2xl bg-white text-blue-900 shadow-xl"
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
