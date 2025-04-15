export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',    // Azul padrão (Tailwind blue-500)
          light: '#60A5FA',      // Azul claro
          dark: '#1D4ED8',       // Azul escuro
          softer: '#EFF6FF',     // Fundo azul clarinho
        },
        secondary: {
          DEFAULT: '#9333EA',    // Roxo vibrante
          light: '#C084FC',
          dark: '#6B21A8',
        },
        neutral: {
          light: '#F3F4F6',      // Cinza claro (fundo)
          DEFAULT: '#9CA3AF',    // Cinza médio
          dark: '#111827',       // Cinza bem escuro (texto em dark mode)
        },
        accent: {
          green: '#10B981',      // Verde (sucesso, destaques positivos)
          red: '#EF4444',        // Vermelho (erros, alertas)
          yellow: '#FACC15',     // Amarelo (avisos)
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(1rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      "2xl": "1920px",      // Full HD
      "3xl": "2560px",      // 2K
      "4xl": "3840px",      // 4K
    },
  },
  plugins: [],
};
