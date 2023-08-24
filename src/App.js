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
            <Route exact path="/" element={<Profile />} />
            <Route exact path="/profile" element={<Profile posts__infor={props.posts__infor} />} />
            <Route exact path="/messages" element={<Messages messages_users={props.messages_users} messages_texts={props.messages_texts} />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/feed" element={<Feed />} />
            <Route exact path="/friends" element={<Friends />} />
          </Routes>

        </div>
      </BrowserRouter>

    </div >
  );
}

export default App;