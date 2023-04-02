import { Home, Login, Settings, Signup, UserProfile } from '../pages';
import { Loader, Navbar } from './';
import { useAuth } from '../hooks';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';

const Page404 = () => {
  return <h1>Page404</h1>;
};

const Private = () => {
  return <h1>Private</h1>;
};

function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth.user ? <>{children}</> : <Navigate to="/login" />;
}

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
          <Route
            path="/user/:userId"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/private"
            element={
              <PrivateRoute>
                <Private />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
