import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Menu} from '../Menu'
import {HomePage} from '../HomePage'
import {BlogPage} from '../BlogPage'
import { ProfilePage } from '../ProfilePage';
function App() {
  return (
    <>
    <HashRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='*' element={<p>NOT FOUND &#9785;</p>}/>
      </Routes>
    </HashRouter>
    </>
  );
}

export {App};

