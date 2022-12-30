import About from './About';
import './App.css';
import Footer from './Footer';
import HeaderAndItems from './Header';
import Slider from './Slider';
// import Header from './Header';
// import Items from './Items';

function App() {
  return (
    <div className="App">
      <HeaderAndItems />
      
      {/* <Items /> */}
      <About />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
