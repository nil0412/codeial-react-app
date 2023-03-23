import { getPosts } from '../api';
import { useEffect, useState } from 'react';
import { Home, Login, Signup } from '../pages';
import { Loader, Navbar } from './';
import { useAuth } from '../hooks';
import {
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

const Page404 = () => {
  return <h1>Page404</h1>;
};

function App() {
  console.log("In App");
  const auth = useAuth();

  if (auth.loading) {
    console.log("auth.loading");
    return <Loader />;
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route element={<Page404 />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
