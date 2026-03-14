import React, { useState } from 'react';
import InquirySection from '../../components/InquirySection';
import { Helmet } from 'react-helmet';

const gallery = [
  '/pics/ubytovanie/AttelierKay..-42.webp',
  '/pics/ubytovanie/AttelierKay..-43.webp',
  '/pics/ubytovanie/AttelierKay..-44.webp',
  '/pics/ubytovanie/AttelierKay..-45.webp',
  '/pics/ubytovanie/AttelierKay..-46.webp',
  '/pics/ubytovanie/AttelierKay..-47.webp',
  '/pics/ubytovanie/AttelierKay..-48.webp',
  '/pics/ubytovanie/AttelierKay..-49.webp',
  '/pics/ubytovanie/AttelierKay..-50.webp',
  '/pics/ubytovanie/AttelierKay..-51.webp',
  '/pics/ubytovanie/AttelierKay..-52.webp',
  '/pics/ubytovanie/AttelierKay..-53.webp',
  '/pics/ubytovanie/AttelierKay..-54.webp',
  '/pics/ubytovanie/AttelierKay..-55.webp',
  '/pics/ubytovanie/AttelierKay..-62.webp',
  '/pics/ubytovanie/AttelierKay..-63.webp',
  '/pics/ubytovanie/AttelierKay..-64.webp',
  '/pics/ubytovanie/AttelierKay..-65.webp',
  '/pics/ubytovanie/AttelierKay..-66.webp',
  '/pics/ubytovanie/AttelierKay..-67.webp',
];

const EquipmentAccommodationPage = () => {
  const [modal, setModal] = useState<{ open: boolean; idx: number }>({ open: false, idx: 0 });
  return (
    <>
      <Helmet>
        <title>Ubytovanie – Vybavenie | Hotel Hrádok</title>
        <meta name="description" content="Ubytovanie v hoteli Hrádok – komfortné izby, apartmány, spoločné priestory, rodiny, skupiny, firemné akcie, Malá Fatra." />
        <meta name="keywords" content="ubytovanie, hotel hrádok, izby, apartmány, spoločné priestory, rodiny, skupiny, firemné akcie, hotel Malá Fatra, hotel Bystrička, hotel pre skupiny, hotel pre rodiny, hotel Slovensko, horský hotel, exkluzívny prenájom, svadba, svadobný hotel, firemné školenie, teambuilding, dovolenka, event, hotel Martin, hotel Žilina, wellness hotel, hotel pre firmy, hotel pre deti, hotel pre oslavy, hotel pre svadby, hotel v prírode, hotel Turiec, hotel pre eventy, hotel pre teambuilding, hotel pre rodinné akcie, hotel pre firemné akcie, hotel pre veľké skupiny, hotel pre menšie skupiny, hotel s wellnessom, hotel s cateringom, hotel s barom, hotel s herňou, hotel s vinárňou, hotel s kuchyňou, hotel s grilom, hotel s jedálňou, hotel s detským kútikom, hotel pre turistov, hotel pre cyklistov, hotel pre rodiny s deťmi, hotel pre seniorov, hotel pre mladých, hotel pre páry, hotel pre jednotlivcov, hotel pre skupinové pobyty, hotel pre firemné pobyty, hotel pre svadobné hostiny, hotel pre oslavy narodenín, hotel pre konferencie, hotel pre semináre, hotel pre školenia, hotel pre workshopy, hotel pre retreaty, hotel pre športové sústredenia, hotel pre relax, hotel pre oddych, hotel pre zážitky, hotel pre prírodu, hotel pre hory, hotel pre Malú Fatru, hotel pre Bystričku, hotel pre Turiec, hotel pre Slovensko, hotel pre zahraničných hostí, hotel pre domácich hostí, hotel s parkovaním, hotel s wifi, hotel s raňajkami, hotel s polpenziou, hotel s plnou penziou, hotel s domácimi zvieratami, hotel s výhľadom, hotel s terasou, hotel s balkónom, hotel s veľkou záhradou, hotel s grilom, hotel s ohniskom, hotel s detským ihriskom, hotel s bazénom, hotel s vírivkou, hotel s fínskou saunou, hotel s relax zónou, hotel s konferenčnou miestnosťou, hotel s projektorom, hotel s ozvučením, hotel s klimatizáciou, hotel s úschovňou bicyklov, hotel s lyžiarňou, hotel s recepciou, hotel s barom, hotel s reštauráciou, hotel s vinárňou, hotel s herňou, hotel s detským kútikom, hotel s wellnessom, hotel s kuchyňou, hotel s jedálňou, hotel s grilom" />
      </Helmet>
      <div className="pt-24 pb-16 bg-forest-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-forest-950 mb-6 text-center">Ubytovanie</h1>
          <p className="text-forest-700 text-lg mb-8 text-center">
            Komfortné izby, apartmány a spoločné priestory pre váš pobyt. Vhodné pre rodiny, skupiny aj firemné akcie.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {gallery.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Ubytovanie ${idx+1}`}
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
                alt={`Ubytovanie ${modal.idx + 1}`}
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

export default EquipmentAccommodationPage;
