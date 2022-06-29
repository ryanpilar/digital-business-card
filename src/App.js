
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import About from './components/About.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Footer />
      <i class="bi bi-envelope"></i>
    </div>
  );
}

export default App;
