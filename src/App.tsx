import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { theme } from './styles/theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pacotes from './pages/Pacotes';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pacotes" element={<Pacotes />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          {/* Outras rotas serão adicionadas aqui */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
