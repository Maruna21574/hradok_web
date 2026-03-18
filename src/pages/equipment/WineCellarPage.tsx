import React from 'react';
import InquirySection from '../../components/InquirySection';
import { Helmet } from 'react-helmet-async';

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
        <meta name="description" content="Vináreň v hoteli Hrádok – atmosférická vináreň, večerné posedenia, ochutnávky vín, Malá Fatra, Bystrička." />
        <meta name="keywords" content="vináreň, hotel hrádok, atmosféra, večerné posedenia, ochutnávky vín, hotel Malá Fatra, hotel Bystrička, hotel pre skupiny, hotel pre oslavy, hotel Slovensko, hotel pre eventy, hotel pre svadby, hotel pre oslavy, hotel pre firemné akcie, hotel pre rodinné akcie, hotel pre veľké skupiny, hotel pre menšie skupiny, hotel s kuchyňou, hotel s barom, hotel s vinárňou, hotel s herňou, hotel s wellnessom, hotel s grilom, hotel s detským kútikom, hotel s parkovaním, hotel s wifi, hotel s raňajkami, hotel s polpenziou, hotel s plnou penziou, hotel s domácimi zvieratami, hotel s výhľadom, hotel s terasou, hotel s balkónom, hotel s veľkou záhradou, hotel s grilom, hotel s ohniskom, hotel s detským ihriskom, hotel s bazénom, hotel s vírivkou, hotel s fínskou saunou, hotel s relax zónou, hotel s konferenčnou miestnosťou, hotel s projektorom, hotel s ozvučením, hotel s klimatizáciou, hotel s úschovňou bicyklov, hotel s lyžiarňou, hotel s recepciou, hotel s barom, hotel s reštauráciou, hotel s vinárňou, hotel s herňou, hotel s detským kútikom, hotel s wellnessom, hotel s kuchyňou, hotel s jedálňou, hotel s grilom" />
      </Helmet>
      <div className="pt-24 pb-16 bg-forest-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4">
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
