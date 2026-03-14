import React from 'react';
import InquirySection from '../../components/InquirySection';
import { Helmet } from 'react-helmet';

const gallery = [
  '/pics/vinaren1.webp',
  '/pics/vinaren2.webp',
  // Pridaj ďalšie fotky podľa potreby
];

const EquipmentWineCellarPage = () => {
  return (
    <>
      <Helmet>
        <title>Vináreň – Vybavenie | Hotel Hrádok</title>
        <meta name="description" content="Vináreň v hoteli Hrádok – atmosférická vináreň vhodná na večerné posedenia alebo ochutnávky." />
      </Helmet>
      <div className="pt-24 pb-16 bg-forest-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-forest-950 mb-6 text-center">Vináreň</h1>
          <p className="text-forest-700 text-lg mb-8 text-center">
            Atmosférická vináreň vhodná na večerné posedenia alebo ochutnávky vín. Ideálne miesto na neformálne rozhovory a zážitky.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {gallery.map((src, idx) => (
              <img key={idx} src={src} alt={`Vináreň ${idx+1}`} className="w-full h-64 object-cover rounded-2xl shadow" />
            ))}
          </div>
        </div>
        <div className="mt-16">
          <InquirySection />
        </div>
      </div>
    </>
  );
};

export default EquipmentWineCellarPage;
