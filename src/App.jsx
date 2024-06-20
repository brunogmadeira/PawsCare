import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import TelaLogin from './pages/TelaLogin'
import './App.css'
import TelaCadastro from './pages/TelaCadastro'
import TelaHome from './pages/TelaHome'



function App() {

  return (
    <>
      <Router>
            <Routes>
                <Route path='/' element={<TelaLogin/>} />
                <Route path='/TelaHome' element={<TelaHome/>} />
                <Route path='/TelaCadastro' element={<TelaCadastro/>} />     
            </Routes>
        </Router>
    </>
  )
}

export default App
