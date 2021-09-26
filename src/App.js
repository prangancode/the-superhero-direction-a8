import './App.css';
import Header from './components/Header/Header';
import Festival from './components/Festival/Festival';

function App() {
  return (
    <div className="w-full h-full bg-cover bg-no-repeat bg-left bg-fixed" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80")` }}>
      < Header ></Header >
      <Festival></Festival>
    </div >
  );
}

export default App;
