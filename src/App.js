import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Festival from './components/Festival/Festival';

function App() {
  return (
    <div className="w-full h-full bg-cover bg-no-repeat bg-left bg-fixed" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80")` }}>
      < Header ></Header >
      <Festival></Festival>
    </div >
  );
}

export default App;
