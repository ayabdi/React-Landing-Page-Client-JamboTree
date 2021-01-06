import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Products from './components/Products'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Products></Products>
    </div>
  );
}

export default App;
