import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import { theme } from './styles/theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pacotes from './pages/Pacotes';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Pagamento from './pages/Pagamento';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Box className="flex justify-center items-center min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pacotes" element={<Pacotes />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/pagamento" element={<Pagamento />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
