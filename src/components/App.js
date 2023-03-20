import { getPosts } from '../api';
import { useEffect, useState } from 'react';
import { Home, Login } from '../pages';
import { Loader, Navbar } from './';

import {
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

const About = () => {
  return <h1>About</h1>;
};

const Userinfo = () => {
  return <h1>User</h1>;
};

const Page404 = () => {
  return <h1>Page404</h1>;
};

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log('response', response);
      if (response.success) {
        setPosts(response.data.posts);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home posts={posts} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/user/userId' element={<Userinfo />} />
        <Route element={<Page404 />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
