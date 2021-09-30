import './App.css';
import Login from './pages/Login';
import Content from './pages/Content';
import {Route} from 'react-router-dom';




const code = new URLSearchParams(window.location.search).get('code');

function App() {
  
  return (
    <div className="App">
      {code ? <Content code={code} /> : <Login />}
      {/* <Signup/> */}
      
      
      
    </div>
  );
}

export default App;
