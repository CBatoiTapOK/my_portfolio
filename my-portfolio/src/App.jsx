import styles from './App.module.css'
import Home from './components/home'
import NavBar from './components/NavBar'


function App() {
  return <div className={styles.App}>
    <NavBar />
    <Home />
  </div>

}

export default App
