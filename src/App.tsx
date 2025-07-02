import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import { AuthProvider } from './contexts/AuthContext';
import { SocialProvider } from './contexts/SocialContext';
import { TravelProvider } from './contexts/TravelContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pacotes from './pages/Pacotes';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Pagamento from './pages/Pagamento';
import Social from './pages/Social';
import { useAuth } from './contexts/AuthContext';
import { seniorTheme } from './styles/theme';

function AppContent() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="*" element={<Social />} />
      </Routes>
    );
  }

  return (
    <>
      <Navbar />
      <Box 
        className="flex justify-center items-center min-h-screen"
        sx={{ 
          pt: { xs: 8, md: 10 }, // Espaçamento para a navbar fixa
          backgroundColor: 'background.default',
          minHeight: '100vh'
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pacotes" element={<Pacotes />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/social" element={<Social />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Box>
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={seniorTheme}>
      <CssBaseline />
      <AuthProvider>
        <SocialProvider>
          <TravelProvider>
            <Router>
              <AppContent />
              <ToastContainer
                position="top-right"
                autoClose={5000} // Tempo maior para idosos lerem
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastStyle={{
                  fontSize: '1.125rem', // Texto maior nas notificações
                  minHeight: '64px',
                  borderRadius: '12px',
                }}
              />
            </Router>
          </TravelProvider>
        </SocialProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
