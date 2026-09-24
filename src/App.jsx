import { BrowserRouter as Router, Router, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { GameCard } from './components/GameCard'
import { Home } from './pages/Home'
import { Contato } from './pages/Contato'
import { Error } from './pages/Error'
import { Jogos } from './pages/Jogos'
import { Login } from './pages/Login'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-[#141414] pt-4">
        <Header>
          <Routes>
            <Rounte path='/' element={<Home />} />
            <Rounte path='/jogos' element={<Jogos />} />
            <Rounte path='/contato' element={<Contato />} />
            <Rounte path='/login' element={<Login />} />
            <Rounte path='*' element={<Error />} />
          </Routes>
        </Header>
      </div>
    </Router>
  )
}

export default App
