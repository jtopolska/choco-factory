import About from './About';
import './App.css';
import Footer from './Footer';
import HeaderAndItems from './Header';
import Slider from './Slider';

function App() {
  return (
    <div className="App">
      <HeaderAndItems />
      <About />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
