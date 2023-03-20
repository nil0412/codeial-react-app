import { getPosts } from '../api';
import { useEffect, useState } from 'react';
import { Home, Login } from '../pages';
import { Loader, Navbar } from './';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home posts={posts} />
      ),
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/user/userId",
      element: <Userinfo />
    },
    // {
    //   element: <Page404 />
    // },
  ]);

  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
