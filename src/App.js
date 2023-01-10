
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateUser from './components/CreateUser';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
 <div className="App">
 <Routes>
 <Route exact path='/' element={<CreateUser />}> </Route>
 <Route exact path='/login' element={<Login />}> </Route>

 </Routes>
   
    </div>
    </BrowserRouter>
   
  );
}

export default App;
