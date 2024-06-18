import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import TelaLogin from './pages/TelaLogin'
import './App.css'



function App() {

  return (
    <>
      
      <Router>
            <Routes>
                <Route path='/' element={<TelaLogin />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
