import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TelaLogin from './pages/TelaLogin';
import TelaLoginONG from './pages/TelaLoginONG';
import TelaHome from './pages/TelaHome';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<TelaLogin />} />
                <Route path='/login-ong' element={<TelaLoginONG />} />
                <Route path='/TelaHome' element={<TelaHome />} />
            </Routes>
        </Router>
    );
}

export default App;
