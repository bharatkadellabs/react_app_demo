import React from 'react';
import Header from './componets/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';






const App = () => {
  return (
    <div>
      <Router>
        <Header></Header>
       
        <Routes>
         
          <Route exact path='/' component={Home} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/SignIn' component={SignIn} />
        
        </Routes>
      </Router>
    </div>
  )
}

export default App;