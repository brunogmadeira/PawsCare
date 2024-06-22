import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TelaLogin from './pages/TelaLogin';
import TelaLoginONG from './pages/TelaLoginONG';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<TelaLogin />} />
                <Route path='/login-ong' element={<TelaLoginONG />} />
            </Routes>
        </Router>
    );
}

export default App;
