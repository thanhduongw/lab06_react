import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import RecipeOfDay from './components/RecipeOfDay'
import SummerRecipes from './components/SummerRecipes'

function App() {

  return (
    <Router>
      <Header/>
      <RecipeOfDay/>
      <SummerRecipes/>
      <Footer/>
    </Router>
  )
}

export default App
