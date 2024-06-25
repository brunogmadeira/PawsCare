import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimalProvider } from './context/AnimalContext';
import TelaLogin from './pages/TelaLogin';
import TelaHome from './pages/TelaHome';
import TelaCadastro from './pages/TelaCadastro';
import './App.css';

function App() {
  return (
    <AnimalProvider>
      <Router>
        <Routes>
          <Route path='/' element={<TelaLogin />} />
          <Route path='/TelaHome' element={<TelaHome />} />
          <Route path='/TelaCadastro' element={<TelaCadastro />} />
        </Routes>
      </Router>
    </AnimalProvider>
  );
}

export default App;
