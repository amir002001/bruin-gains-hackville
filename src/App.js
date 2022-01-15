import './App.css';
import './devices.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ChatView from './Views/ChatView'
import Home from './Views/HomeView'
import CreateSessionView from './Views/CreateSessionView';
import UserProfileView from './Views/UserProfileView';
import FindFriendsView from './Views/FindFriendsView';
import FriendsView from './Views/FriendsView';


function App() {
  return (
    <div className="App">
      <div className="marvel-device iphone-x">
        <div className="notch">
          <div className="camera"></div>
          <div className="speaker"></div>
        </div>
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="bottom-bar"></div>
        <div className="volume"></div>
        <div className="overflow">
          <div className="shadow shadow--tr"></div>
          <div className="shadow shadow--tl"></div>
          <div className="shadow shadow--br"></div>
          <div className="shadow shadow--bl"></div>
        </div>
        <div className="inner-shadow"></div>
        <div className="screen">
          <Router>
            <div>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/chatView" element={<ChatView />} />
                <Route path="/profileView" element={<UserProfileView />} />
                <Route path="/createSessionView" element={<CreateSessionView />} />
                <Route path="/findFriendsView" element={<FindFriendsView />} />
                <Route path="/friendsView" element={<FriendsView />} />
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;