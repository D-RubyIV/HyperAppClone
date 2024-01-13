import './App.css';
import NavBarComponet from './Componets/NavbarComponet'
import PlanSection from './Sections/PlanSection';
import BlogSection from './Sections/BlogSection'
import DragFilesComponet from './Componets/DragFilesComponet'
import LoginComponet from './Componets/LoginComponet';
import PrivateRoute from './Utils/PrivateRoute';
import { AuthProvider } from './Context/AuthContext'
import { Routes, Route } from "react-router-dom";
import React from 'react';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path='/' element={<PrivateRoute />} />
          <Route path='/home' element={(
            <React.Fragment>
              <NavBarComponet />
              <PlanSection />
              <BlogSection />
            </React.Fragment>
          )} />
          <Route path='/getcode' element={<DragFilesComponet />} />
          <Route path='/login' element={<LoginComponet />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}
export default App;
