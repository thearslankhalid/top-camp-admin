import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';


function App() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
