import React, { useState } from 'react';
import InquirySection from '../../components/InquirySection';
import { Helmet } from 'react-helmet';

const gallery = [
  '/pics/kuchyna/AttelierKay..-39.webp',
  '/pics/kuchyna/AttelierKay..-40.webp',
  '/pics/kuchyna/AttelierKay..-41.webp',
];

const EquipmentKitchenPage = () => {
  const [modal, setModal] = useState<{ open: boolean; idx: number }>({ open: false, idx: 0 });
  return (
    <>
      <Helmet>
        <title>Kuchyňa – Vybavenie | Hotel Hrádok</title>
        <meta name="description" content="Kuchyňa v hoteli Hrádok – plne vybavená kuchyňa, príprava jedál, catering, spotrebiče, riad, Malá Fatra, Bystrička." />
        <meta name="keywords" content="kuchyňa, hotel hrádok, vybavená kuchyňa, príprava jedál, catering, spotrebiče, riad, hotel Malá Fatra, hotel Bystrička, hotel pre skupiny, hotel pre rodiny, hotel Slovensko, hotel pre eventy, hotel pre svadby, hotel pre oslavy, hotel pre firemné akcie, hotel pre rodinné akcie, hotel pre veľké skupiny, hotel pre menšie skupiny, hotel s kuchyňou, hotel s barom, hotel s vinárňou, hotel s herňou, hotel s wellnessom, hotel s grilom, hotel s detským kútikom, hotel s parkovaním, hotel s wifi, hotel s raňajkami, hotel s polpenziou, hotel s plnou penziou, hotel s domácimi zvieratami, hotel s výhľadom, hotel s terasou, hotel s balkónom, hotel s veľkou záhradou, hotel s grilom, hotel s ohniskom, hotel s detským ihriskom, hotel s bazénom, hotel s vírivkou, hotel s fínskou saunou, hotel s relax zónou, hotel s konferenčnou miestnosťou, hotel s projektorom, hotel s ozvučením, hotel s klimatizáciou, hotel s úschovňou bicyklov, hotel s lyžiarňou, hotel s recepciou, hotel s barom, hotel s reštauráciou, hotel s vinárňou, hotel s herňou, hotel s detským kútikom, hotel s wellnessom, hotel s kuchyňou, hotel s jedálňou, hotel s grilom" />
      </Helmet>
      <div className="pt-24 pb-16 bg-forest-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-forest-950 mb-6 text-center">Kuchyňa</h1>
          <p className="text-forest-700 text-lg mb-8 text-center">
            Plne vybavená kuchyňa na prípravu vlastných jedál alebo catering. K dispozícii sú všetky potrebné spotrebiče a riad.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {gallery.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Kuchyňa ${idx+1}`}
                className="w-full h-64 object-cover rounded-2xl shadow cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setModal({ open: true, idx })}
              />
            ))}
          </div>
          {/* Modal gallery */}
          {modal.open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
              <button
                className="absolute top-6 right-6 text-white text-3xl font-bold bg-black/40 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70 transition"
                onClick={() => setModal({ open: false, idx: 0 })}
                aria-label="Zavrieť galériu"
              >
                ×
              </button>
              <button
                className="absolute left-4 md:left-12 text-white text-4xl font-bold bg-black/40 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70 transition"
                onClick={() => setModal(m => ({ open: true, idx: (m.idx - 1 + gallery.length) % gallery.length }))}
                aria-label="Predchádzajúca fotka"
              >
                ‹
              </button>
              <img
                src={gallery[modal.idx]}
                alt={`Kuchyňa ${modal.idx + 1}`}
                className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl border-4 border-white"
                style={{ objectFit: 'contain' }}
              />
              <button
                className="absolute right-4 md:right-12 text-white text-4xl font-bold bg-black/40 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70 transition"
                onClick={() => setModal(m => ({ open: true, idx: (m.idx + 1) % gallery.length }))}
                aria-label="Ďalšia fotka"
              >
                ›
              </button>
            </div>
          )}
        </div>
        <div className="mt-16">
          <InquirySection />
        </div>
      </div>
    </>
  );
};

export default EquipmentKitchenPage;
