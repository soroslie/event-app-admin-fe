import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import RequireAuth from './components/layout/RequireAuth';
import DashboardLayout from './components/layout/DashboardLayout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import DashboardEvents from './pages/DashboardEvents';
import DashboardMerchandise from './pages/DashboardMerchandise';
import DashboardUsers from './pages/DashboardUsers';
import AuthLayout from './components/layout/AuthLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={(<AuthLayout />)}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route
            path="/"
            element={(
              <RequireAuth redirectTo="/login">
                <DashboardLayout />
              </RequireAuth>
            )}
          >
            <Route index element={<Home />} />
            <Route path="/event" element={<DashboardEvents />} />
            <Route path="/merchandise" element={<DashboardMerchandise />} />
            <Route path="/users" element={<DashboardUsers />} />
            <Route path="/profile" element={<Profile />} />

          </Route>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
