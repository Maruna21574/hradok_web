import React, { useState } from 'react';
import InquirySection from '../../components/InquirySection';
import { Helmet } from 'react-helmet';

const gallery = [
  '/pics/herna/AttelierKay..-56.webp',
  '/pics/herna/AttelierKay..-57.webp',
  '/pics/herna/AttelierKay..-58.webp',
  '/pics/herna/AttelierKay..-59.webp',
  '/pics/herna/AttelierKay..-60.webp',
  '/pics/herna/AttelierKay..-61.webp',
  '/pics/herna/AttelierKay..-68.webp',
  '/pics/herna/AttelierKay..-69.webp',
  '/pics/herna/AttelierKay..-70.webp',
  '/pics/herna/AttelierKay..-71.webp',
  '/pics/herna/AttelierKay..-72.webp',
  '/pics/herna/AttelierKay..-73.webp',
];

const EquipmentGameRoomPage = () => {
  const [modal, setModal] = useState<{ open: boolean; idx: number }>({ open: false, idx: 0 });
  return (
    <>
      <Helmet>
        <title>Herňa – Vybavenie | Hotel Hrádok</title>
        <meta name="description" content="Herňa v hoteli Hrádok – spoločenská miestnosť s biliardom, šípkami a stolným tenisom pre zábavu všetkých vekových kategórií." />
      </Helmet>
      <div className="pt-24 pb-16 bg-forest-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-forest-950 mb-6 text-center">Herňa (biliard, šípky, pingpong)</h1>
          <p className="text-forest-700 text-lg mb-8 text-center">
            Spoločenská miestnosť s biliardom, šípkami a stolným tenisom pre zábavu všetkých vekových kategórií. Ideálne na večerné posedenia alebo turnaje.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {gallery.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Herňa ${idx+1}`}
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
                alt={`Herňa ${modal.idx + 1}`}
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

export default EquipmentGameRoomPage;
