import { Home, Login, Settings, Signup } from '../pages';
import { Loader, Navbar } from './';
import { useAuth } from '../hooks';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';

const Page404 = () => {
  return <h1>Page404</h1>;
};




function App() {
  const auth = useAuth();

  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={auth.user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={auth.user ? <Navigate to="/" /> : <Signup />}
          />
          <Route
            path="/settings"
            element={auth.user ? <Settings /> : <Navigate to="/login" />}
          />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
