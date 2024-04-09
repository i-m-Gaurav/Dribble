import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import SetProfile from './components/SetProfile';
import ChooseRole from './components/ChooseRole';
import FinalPage from './components/FinalPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path='/SetProfile' element = {<SetProfile/>} />
        <Route path='/ChooseRole' element = {<ChooseRole/>} />
        <Route path='/FinalPage' element = {<FinalPage/>} />
        
      </Routes>
    </Router>
  );
};

export default App;