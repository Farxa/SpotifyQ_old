import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {

  const code = new URLSearchParams(window.location.search).get('code')
  return (
    <div>
    {code ? <Dashboard code={code}/> : <Login/>}
    
    </div>
  );
}

export default App;
