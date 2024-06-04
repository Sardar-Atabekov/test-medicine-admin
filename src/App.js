import React, { lazy } from "react";
// import Main from "./pages/main/main";
import useToken from "./hooks/useToken"
import NotFoundPage from "./pages/404/404";
import LoginPage from "./pages/login/login";
import NursesPage from "./pages/nurses/nurses";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import DoctorsPage from "./pages/doctors/doctors";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import './App.css';


const NavBar = lazy(() => import('./components/navbar/navbar'));

function App() {

  const { token, setToken } = useToken();


  console.log('token', token);
  if (!token) {
    return <LoginPage setToken={setToken} />
  }


  return (
    <div className="App">
      <BrowserRouter>
          <div className="app-wrapper">
            <NavBar setToken={setToken}/>
            <main className="container">
              <Header />
              <Routes>
                {/* <Route path="/staff/" exact element={<Index />} /> */}
                <Route path="/nurses/" exact element={<NursesPage />} />
                <Route path="/doctors/" exact element={<DoctorsPage />} />
                <Route path="/" element={<Navigate replace to="/doctors/" />} />
                <Route path="*" exact element={<NotFoundPage />} />
              </Routes>
              <Footer />
            </main>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
