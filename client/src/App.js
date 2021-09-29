import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';




const code = new URLSearchParams(window.location.search).get('code');

function App() {
  
  return (
    <div className="App">
      {code ? <Dashboard code={code} /> : <Login />}
      {/* <Signup/> */}
      
    </div>
  );
}

export default App;
