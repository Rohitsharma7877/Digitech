import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MainRouter from './Pages/MainRouter';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRouter/>
      <Footer/>
    </div>
  );
}
export default App;
