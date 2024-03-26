import './App.css';
import Navbar from './component/navbar';
import Home from './component/home';
import Aboutthunder from './component/aboutThunder';
import OurMenu from './component/ourMenu';
import Dishes from './component/dishes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Aboutthunder/>
      <OurMenu/>
      <Dishes/>
    </div>
  );
}

export default App;
