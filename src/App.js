
import './App.css';
import NavBar from './Components/js/NavBar';
import SkinCare from './Components/js/Principal'
import SkinTypes from './Components/js/SkinTypes';
import Cuidados from './Components/js/Cuidados';
import Footer from './Components/js/Footer';


function App() {
  return (
    <div>
      <NavBar/>
      <SkinCare/>
      <SkinTypes/>
      <Cuidados/>
      <Footer/>
    </div>
  );
}

export default App;
