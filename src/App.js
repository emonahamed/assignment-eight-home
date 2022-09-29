import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <Questions></Questions>

    </div>
  );
}

export default App;
