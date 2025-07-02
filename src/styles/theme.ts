import { createTheme } from '@mui/material/styles';

export const seniorTheme = createTheme({
  palette: {
    primary: {
      main: '#2E7D32', // Verde mais escuro para melhor contraste
      light: '#4CAF50',
      dark: '#1B5E20',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF6B35', // Laranja para destaque
      light: '#FF8A65',
      dark: '#E64A19',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F5F5', // Fundo claro para melhor legibilidade
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121', // Texto escuro para alto contraste
      secondary: '#424242',
    },
    error: {
      main: '#D32F2F', // Vermelho mais escuro
    },
    warning: {
      main: '#F57C00', // Laranja mais escuro
    },
    success: {
      main: '#388E3C', // Verde mais escuro
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (min-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (min-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    body1: {
      fontSize: '1.125rem', // Texto base maior
      lineHeight: 1.6,
      '@media (min-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
      '@media (min-width:600px)': {
        fontSize: '1.125rem',
      },
    },
    button: {
      fontSize: '1.125rem',
      fontWeight: 600,
      textTransform: 'none', // Remove transformação de texto
      '@media (min-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    caption: {
      fontSize: '0.875rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12, // Bordas mais arredondadas
          padding: '12px 24px',
          minHeight: 56, // Altura mínima maior para facilitar clique
          fontSize: '1.125rem',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
          '&:hover': {
            boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
          '@media (min-width:600px)': {
            padding: '16px 32px',
            minHeight: 64,
            fontSize: '1.25rem',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 6px 12px rgba(0,0,0,0.25)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            fontSize: '1.125rem',
            minHeight: 56,
            '@media (min-width:600px)': {
              fontSize: '1.25rem',
              minHeight: 64,
            },
          },
          '& .MuiInputLabel-root': {
            fontSize: '1.125rem',
            '@media (min-width:600px)': {
              fontSize: '1.25rem',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          minHeight: 64, // Altura mínima maior para facilitar toque
          '@media (min-width:600px)': {
            minHeight: 72,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          minWidth: 48,
          minHeight: 48,
          '@media (min-width:600px)': {
            minWidth: 56,
            minHeight: 56,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          height: 40,
          '@media (min-width:600px)': {
            fontSize: '1.125rem',
            height: 48,
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
}); 