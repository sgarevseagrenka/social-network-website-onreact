import './App.css';
import Header from './komponents/header/Header'
import Navbar from './komponents/navbar/Navbar'
import Profile from './komponents/profile/Profile'
import Messages from './komponents/messages/Messages';
import Users from './komponents/users/Users'
import Feed from './komponents/feed/Feed';
import Friends from './komponents/friends/Friends'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App(props) {
  return (
    <div className='wrapper'>
      <Header />
      <BrowserRouter>
        <Navbar />
        <div className='wrapper__content'>

          <Routes>
            <Route exact path="/" element={<Profile profile_page={props.state.profile_page} add_post={props.add_post} />} />
            <Route exact path="/profile" element={<Profile profile_page={props.state.profile_page} add_post={props.add_post} />} />
            <Route exact path="/messages" element={<Messages messages_page={props.state.messages_page} />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/feed" element={<Feed />} />
            <Route exact path="/friends" element={<Friends friends_page={props.state.friends_page} />} />
          </Routes>

        </div>
      </BrowserRouter>

    </div >
  );
}

export default App;
