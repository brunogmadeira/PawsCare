import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimalProvider } from './context/AnimalContext';
import { UserProvider } from './context/UserContext';
import TelaLogin from './pages/TelaLogin';
import TelaHome from './pages/TelaHome';
import TelaCadastro from './pages/TelaCadastro';
import FormularioCadastro from './components/FormularioCadastro';
import TelaPerfil from './pages/TelaPerfil';
import './App.css';

function App() {
  return (
    <AnimalProvider>
      <UserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<TelaLogin />} />
          <Route path='/TelaHome' element={<TelaHome />} />
          <Route path='/TelaCadastro' element={<TelaCadastro />} />
          <Route path='/FormularioCadastro' element={<FormularioCadastro />} />
          <Route path='/TelaPerfil' element={<TelaPerfil />} />
        </Routes>
      </Router>
      </UserProvider>
    </AnimalProvider>
  );
}

export default App;
