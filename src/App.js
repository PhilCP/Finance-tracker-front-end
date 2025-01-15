import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import FooterSection from "./components/FooterSection";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import CTASection from "./components/CTASection";
import AdaptableSection from "./components/AdaptableSection";
import YourComponent from "./components/YourComponent";
import ContactForm from "./components/ContactForm";
import AppTour from './components/AppTour';
import Pricing from './components/Pricing';

const AppContent = () => {
  const location = useLocation();
  const hideLayoutRoutes = ['/login', '/signup'];
  const shouldHideLayout = hideLayoutRoutes.some((path) => location.pathname.toLowerCase() === path.toLowerCase());

  return (
    <div className="App">
      {/* Hide Header and Footer on Login/Signup pages */}
      {!shouldHideLayout && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeaturesSection />
              <CTASection />
              <AdaptableSection />
              <YourComponent />
              <ContactForm />
            </>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/AppTour" element={<AppTour />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/FeaturesSection" element={<FeaturesSection />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/login" element={<Navigate to="/login" />} />
      </Routes>
      {/* Hide Footer on Login/Signup pages */}
      {!shouldHideLayout && <FooterSection />}
    </div>
  );
};

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <AppContent />
      </Router>
    </Suspense>
  );
}

export default App;
