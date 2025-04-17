import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
      <footer className="bg-neutral-900/80 backdrop-blur text-white py-10 mt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <h3 className="text-xl font-bold">Hélio Hideo Hachimine Junior</h3>
            <p className="text-sm text-white/70 mt-2">
              Desenvolvedor Mobile focado em criar experiências criativas e modernas.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Contato</h4>
            <ul className="text-sm space-y-1">
              <li>Email: <a href="mailto:heliohachimine@gmail.com" className="underline">heliohachimine@gmail.com</a></li>
              <li>Telefone: +55 (16) 99795-1503</li>
              <li>Localização: Uberaba, MG</li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/heliohachimine" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/helio-hachimine" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-white/50 mt-10">
          © {new Date().getFullYear()} Hélio Hideo Hachimine Junior. Todos os direitos reservados.
        </div>
      </footer>
    );
  }
