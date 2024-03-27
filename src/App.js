import './App.css';
import Navbar from './component/navbar';
import Home from './component/home';
import Aboutthunder from './component/aboutThunder';
import OurMenu from './component/ourMenu';
import Dishes from './component/dishes';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Aboutthunder/>
      <OurMenu/>
      <Dishes/>
      <Footer/>
    </div>
  );
}

export default App;
