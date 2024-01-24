
import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/signup" component={Signup} />
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
