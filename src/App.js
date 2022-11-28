import './App.css';
import { Header } from './component/Header';
import { Home } from './pages/home/Home';


function App() {

  return (
    <div style={{ backgroundColor: "#2b2b2b" }}>
      <Header/>
      <Home />
    </div>
  );
}

export default App;
