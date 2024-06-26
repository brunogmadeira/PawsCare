import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimalProvider } from './context/AnimalContext';
import TelaLogin from './pages/TelaLogin';
import TelaHome from './pages/TelaHome';
import TelaCadastro from './pages/TelaCadastro';
import FormularioCadastro from './components/FormularioCadastro';
import TelaPerfil from './pages/TelaPerfil';
import TelaSobre from './pages/TelaSobre';
import { UserProvider } from './context/UserContext';

import './App.css';

function App() {
  return (
    <UserProvider>  
      <AnimalProvider>
        <Router>
          <Routes>
            <Route path='/' element={<TelaLogin />} />
            <Route path='/TelaSobre' element={<TelaSobre />} />
            <Route path='/TelaHome' element={<TelaHome />} />
            <Route path='/TelaCadastro' element={<TelaCadastro />} />
            <Route path='/FormularioCadastro' element={<FormularioCadastro />} />
            <Route path='/TelaPerfil' element={<TelaPerfil />} />
          </Routes>
        </Router>
      </AnimalProvider>
    </UserProvider>
  );
}

export default App;
