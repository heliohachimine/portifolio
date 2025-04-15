import { motion } from "framer-motion";

export default function ExperiencePage() {
    const experiences = [
      {
        role: "Tech Lead",
        company: "Grão Direto",
        period: "Mai 2022 - Fev 2025",
        description:
          "Fui responsável por liderar a migração tecnológica de um aplicativo que utilizava Ionic 3 para o Flutter. O principal desafio era garantir uma transição suave para os usuários já ativos, sem impactar negativamente sua experiência. Para isso, desenvolvi uma nova aplicação em Flutter reutilizando os sistemas de autenticação existentes. O resultado foi uma troca de tecnologia transparente, preservando a base de usuários e melhorando a performance da aplicação. Além da migração para Flutter, também fui responsável por desenvolver uma ferramenta de Server-Driven UI dentro da aplicação. Essa solução permitiu configurar e personalizar dinamicamente os recursos exibidos para cada tipo de perfil de usuário, tudo isso sem a necessidade de publicar novas versões do app. Isso trouxe mais agilidade ao time de produto e possibilitou testes e atualizações em tempo real, adaptando a experiência do usuário de forma mais eficiente e escalável.",
      },
      {
        role: "Desenvolvedor Android / iOS",
        company: "Act",
        period: "Set 2021 - Mai 2022",
        description:
          "Atuei no projeto responsável pelo módulo de seguros do aplicativo do Banco Pan, com o objetivo de modularizar e desacoplar os recursos incorporados diretamente no app. A solução foi movê-los para uma biblioteca externa, tornando o sistema mais escalável e de fácil manutenção. Contribuí ativamente tanto na implementação em Android (Kotlin) quanto em iOS (Swift), apoiando a equipe no desenvolvimento e integração entre as plataformas.",
      },
      {
        role: "Tech Lead",
        company: "Gira",
        period: "Nov 2020 - Set 2021",
        description:
          "Fui responsável por estruturar e liderar um novo time de desenvolvimento mobile, conduzindo todo o processo — desde a seleção dos candidatos até a definição da arquitetura do projeto. Optamos por tecnologias nativas para garantir performance e integração total com os dispositivos. O principal desafio era garantir a persistência e integridade dos dados em ambientes offline, já que o aplicativo seria utilizado em grandes fazendas, frequentemente sem acesso à internet. Para isso, implementamos uma estratégia robusta de sincronização automática: os dados eram armazenados localmente e enviados para o servidor assim que o dispositivo reconectava à rede.",
      },
      {
        role: "Desenvolvedor Android / iOS",
        company: "Zup Innovation",
        period: "maio 2019 - nov 2020",
        description:
          "Contribuí para o desenvolvimento do Beagle, um framework open source de Server-Driven UI, focado em proporcionar maior flexibilidade na construção de interfaces móveis. A ferramenta foi criada para permitir que equipes de desenvolvimento entreguem novas funcionalidades e personalizações dinamicamente, sem a necessidade de publicar novas versões dos aplicativos nas lojas. Essa abordagem reduz significativamente o tempo de resposta a mudanças de negócio e melhora a escalabilidade das soluções.",
      },
      {
        role: "Estagiário",
        company: "Oficina5 Soluções",
        period: "Ago 2018 - Jan 2019",
        description:
          "Desenvolvimento de aplicativos e sites para pequenos negócios, utilizando tecnologias como HTML, CSS, JavaScript.",
      },
    ];

    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
      };


    return (
        <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4 }}
        >
<div className="w-full min-h-screen flex flex-col max-w-none min-h-screen bg-gradient-to-br from-sky-900 via-blue-800 to-blue-900 text-white px-4 sm:px-6 lg:px-12 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Minha história
          </h1>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-white text-blue-900 rounded-lg shadow-lg p-6 flex flex-col sm:flex-row sm:gap-6"
              >
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-semibold">
                    {experience.role}
                  </h2>
                  <p className="text-sm sm:text-lg font-medium text-blue-700">
                    {experience.company} - {experience.period}
                  </p>
                  <p className="mt-4 text-gray-700 text-sm sm:text-base">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        </motion.div>

    );
  }
