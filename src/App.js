import React, {lazy } from "react";
// import Main from "./pages/main/main";
import NursesPage from "./pages/nurses/nurses";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import DoctorsPage from "./pages/doctors/doctors";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';

const NavBar = lazy(() => import('./components/navbar/navbar'));


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* {!localStorage.getItem("adminDate") ? ( */}
        <div className="app-wrapper">
          <NavBar />
          <main className="container">
            <Header />
            <Routes>
              {/* <Route path="/" exact element={LoginPage} /> */}
              {/* <Route path="/staff/" exact element={<Index />} /> */}
              <Route path="/nurses/" exact element={<NursesPage />} />
              <Route path="/doctors/" exact element={<DoctorsPage />} />
              {/* <Route path="/create-user/doctor" exact element={<CreateEmployee />} /> */}
              {/* <Route path="*" exact element={NotFoundPage} /> */}
            </Routes>
            <Footer />
          </main>
        </div>
        {/* ) : (
          <Routes >
            <Route path="/" exact element={<LoginPage />} />
          </Routes >
        )} */}
      </BrowserRouter>
    </div>
  );
}

export default App;
