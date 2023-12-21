export const defaultTheme = {
  colors: {
    brand: {
      100: '#00B37E',
      200: '#00875F',
      300: '#015F43',
    },
    red: {
      100: '#AA2834',
      200: '#F75A68',
    },
    base: {
      text: {
        100: '#E1E1E6',
        200: '#C4C4CC',
        300: '#8D8D99',
        400: '#7C7C8A',
      },
      shape: {
        100: '#323238',
        200: '#29292E',
        300: '#202024',
      },
      background: '#121214',
    },
  },
  typography: {
    family: {
      roboto: 'Roboto, sans-serif',
    },
    size: {
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
    weight: {
      regular: 400,
      bold: 700,
    },
    lineHeight: {
      base: 1.6,
    },
  },
} as const