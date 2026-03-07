import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-forest-200 selection:text-forest-900 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/o-nas" element={<AboutPage />} />
            <Route path="/sluzby" element={<ServicesPage />} />
            <Route path="/sluzby/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/lokalita" element={<LocationPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/rezervacia" element={<BookingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
