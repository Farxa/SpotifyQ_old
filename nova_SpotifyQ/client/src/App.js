import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import { useParams } from "react-router-dom";
import CreateQ from './components/CreateQ';


function App(props) {

  const code = new URLSearchParams(window.location.search).get('code');
  

  return (
    // <div>
    // {code ? <Dashboard code={code}/> : <Login/>}
    // </div>
    
    
    <Routes>
      
      <Route path='/dashboard' element={<Dashboard code={code}/>} />
      <Route path='/' element={<Home code={code}/>} />
      <Route path='/login' element={<Login />} />

      <Route path="/:inviteCode" element={<CreateQ />}

      />  
        

      {/* <Route
          path='/dashboard'
          element={
            <ProtectedRoute code={code} redirectTo='/login'>
              <Dashboard code={code}/>
            </ProtectedRoute>
          }
        /> */}
    </Routes>
  );
}

export default App;
