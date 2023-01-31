import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes } from 'react-router-dom';
import '../src/App.css'
import Login from './components/Login';
import Singup from './components/Signup';

function App() {
  return (
   
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Login />}> </Route>
          <Route exact path='/register' element={<Singup />}> </Route>

        </Routes>

      </div>
  

  );
}

export default App;
