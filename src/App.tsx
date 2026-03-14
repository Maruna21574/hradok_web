import React from 'react';
// import CookieConsent from 'react-cookie-consent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GDPRPage from './pages/GDPRPage';
import CookiesPage from './pages/CookiesPage';
import ServicesPage from './pages/ServicesPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import EquipmentPage from './pages/EquipmentPage';
import EquipmentKidsCornerPage from './pages/equipment/KidsCornerPage';
import EquipmentWellnessPage from './pages/equipment/WellnessPage';
import EquipmentKitchenPage from './pages/equipment/KitchenPage';
import EquipmentBarPage from './pages/equipment/BarPage';
import EquipmentGameRoomPage from './pages/equipment/GameRoomPage';
import EquipmentGardenPage from './pages/equipment/GardenPage';
import EquipmentWineCellarPage from './pages/equipment/WineCellarPage';
import EquipmentDiningRoomPage from './pages/equipment/DiningRoomPage';
import EquipmentAccommodationPage from './pages/equipment/AccommodationPage';

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
            <Route path="/vybavenie" element={<EquipmentPage />} />
            <Route path="/vybavenie/detsky-kutik" element={<EquipmentKidsCornerPage />} />
            <Route path="/vybavenie/wellness" element={<EquipmentWellnessPage />} />
            <Route path="/vybavenie/kuchyna" element={<EquipmentKitchenPage />} />
            <Route path="/vybavenie/bar" element={<EquipmentBarPage />} />
            <Route path="/vybavenie/herna" element={<EquipmentGameRoomPage />} />
            <Route path="/vybavenie/zahrada-gril" element={<EquipmentGardenPage />} />
            <Route path="/vybavenie/vinaren" element={<EquipmentWineCellarPage />} />
            <Route path="/vybavenie/restaurant" element={<EquipmentDiningRoomPage />} />
            <Route path="/vybavenie/jedalen" element={<EquipmentDiningRoomPage />} />
            <Route path="/vybavenie/ubytovanie" element={<EquipmentAccommodationPage />} />
            <Route path="/gdpr" element={<GDPRPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
