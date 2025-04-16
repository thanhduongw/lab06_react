import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <Router>
      <Header/>
    </Router>
  )
}

export default App
