import './App.css';
import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Content from './pages/Content';
import PlaylistDetails from './pages/PlaylistDetails';

import ProtectedRoute from './componants/ProtectedRoute';
import Sidebar from './componants/Sidebar';
import Playbar from './componants/Playbar';
import Topbar from './componants/Topbar';

function App(props) {

  const [user, setUser] = useState(props.user)

  const addUser = user => {
    setUser(user);
  }

  return (
    <div className="App" style={styling}>
    <Topbar/>
      <Sidebar user={user} setUser={addUser} />
      <Switch>
      <ProtectedRoute
          exact path='/playlists'
          user={user}
          component={Content}
        />
        <ProtectedRoute
          exact path='/playlists/:id'
          user={user}
          component={PlaylistDetails}
        />
        <Route
          exact path="/signup"
          render={props => <Signup setUser={addUser} {...props} />}
        />
        <Route
          exact path="/login"
          render={props => <Login setUser={addUser} {...props} />}
        />
      </Switch>
      <Playbar/>
    </div>
  );
}

const styling = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  position: "relative",
  color: "white",
}

export default App;