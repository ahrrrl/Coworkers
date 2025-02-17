import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 1) 브랜드 컬러
        brand: {
          primary: '#10B981',
          secondary: '#34D399',
          tertiary: '#A3E635',
          gradient: {
            from: '#10B981',
            to: '#A3E635',
          },
        },

        // 2) 포인트 컬러
        point: {
          purple: '#A855F7',
          blue: '#3B82F6',
          cyan: '#06B6D4',
          pink: '#EC4899',
          rose: '#F43F5E',
          orange: '#F97316',
          yellow: '#EAB308',
        },

        // 3) 배경 컬러
        background: {
          primary: '#0F172A',
          secondary: '#1E293B',
          tertiary: '#334155',
          inverse: '#FFFFFF',
        },

        // 4) 인터랙션 컬러
        interaction: {
          inactive: '#94A3B8',
          hover: '#059669',
          pressed: '#047857',
          focus: '#10B981',
        },

        // 5) 테두리
        border: {
          primary: 'rgba(248, 250, 252, 0.5)', // 50% 투명도
        },

        // 6) 텍스트
        text: {
          primary: '#F8FAFC',
          secondary: '#CBD5E1',
          tertiary: '#E2E8F0',
          default: '#64748B',
          inverse: '#FFFFFF',
          disabled: '#94A3B8',
        },

        // 7) 상태 컬러
        status: {
          danger: '#DC2626',
        },

        // 8) 아이콘 컬러
        icon: {
          primary: '#64748B',
          inverse: '#F8FAFC',
          brand: '#10B981',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
