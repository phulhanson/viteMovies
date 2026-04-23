import './css/App.css';
import Favourites from './pages/Favourites';
import Home from "./pages/home"
import {Routes, Route} from "react-router-dom"
import NavBar  from './components/NavBar';
import Footer from './pages/footer';

function App() {
  return (
    <div>
      <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourites' element={<Favourites />} />
      </Routes>
    </main>
    <Footer>
      <Footer />
    </Footer>
    </div>
  );
}

export default App;
