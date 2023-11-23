import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import LandingPage from "./components/landing";
import RegistrationPage from "./components/register";
import LoginPage from "./components/login";
import StudentDashboard from "./components/studentdashboard";
import CourseDisplayPage from "./components/coursedisplay";
import Test from "./components/test";
import AboutUs from "./components/aboutUs";
import FavoriteCourses from "./components/favoriteCourses";

function App() {
  const [user, setUser] = React.useState(null);

  // Calculate the isAuthenticated status
  const isAuthenticated = !!user;

  return (
    <Router>
      <NavBar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/coursedisplay" element={<CourseDisplayPage />} />
        <Route
          path="/login"
          element={<LoginPage onLogin={(userData) => setUser(userData)} />}
        />
        <Route path="/test" element={<Test />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <StudentDashboard user={user} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route
          path="/favorite-courses"
          element={
            isAuthenticated ? (
              <FavoriteCourses user={user} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
