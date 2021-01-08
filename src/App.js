import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Products></Products>
      <ProductDetails/>
      <Footer/>
    </div>
  );
}

export default App;
