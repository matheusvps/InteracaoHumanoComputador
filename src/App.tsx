import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { AuthProvider } from './contexts/AuthContext';
import { SocialProvider } from './contexts/SocialContext';
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
      <Box className="flex justify-center items-center min-h-screen">
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
    <AuthProvider>
      <SocialProvider>
        <Router>
          <AppContent />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Router>
      </SocialProvider>
    </AuthProvider>
  );
}

export default App;
