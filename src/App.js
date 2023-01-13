import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CreateUser from './components/CreateUser';
import Getuser from './components/Getuser';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<CreateUser />}> </Route>
          <Route exact path='/login' element={<Login />}> </Route>
          <Route exact path='/user/:userId/profile' element={<Getuser />}> </Route>

        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
