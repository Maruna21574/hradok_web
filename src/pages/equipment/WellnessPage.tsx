import React from 'react';
import InquirySection from '../../components/InquirySection';
import { Helmet } from 'react-helmet';

const gallery = [
  '/pics/welness/AttelierKay..-9.webp',
  '/pics/welness/AttelierKay..-10.webp',
  '/pics/welness/AttelierKay..-11.webp',
  '/pics/welness/AttelierKay..-12.webp',
  '/pics/welness/AttelierKay..-13.webp',
  '/pics/welness/AttelierKay..-14.webp',
  '/pics/welness/AttelierKay..-15.webp',
  '/pics/welness/AttelierKay..-16.webp',
  '/pics/welness/AttelierKay..-17.webp',
  '/pics/welness/AttelierKay..-18.webp',
  '/pics/welness/AttelierKay..-19.webp',
  '/pics/welness/AttelierKay..-20.webp',
  '/pics/welness/AttelierKay..-21.webp',
  '/pics/welness/AttelierKay..-22.webp',
  '/pics/welness/AttelierKay..-23.webp',
];

const EquipmentWellnessPage = () => {
  const [modal, setModal] = React.useState<{ open: boolean; idx: number }>({ open: false, idx: 0 });
  return (
    <>
      <Helmet>
        <title>Wellness – Vybavenie | Hotel Hrádok</title>
        <meta name="description" content="Wellness v hoteli Hrádok – vírivka, sauna, relax, oddych, súkromie, regenerácia, Malá Fatra, Bystrička." />
        <meta name="keywords" content="wellness, hotel hrádok, vírivka, sauna, relax, oddych, súkromie, regenerácia, hotel Malá Fatra, hotel Bystrička, wellness hotel, hotel pre skupiny" />
      </Helmet>
      <div className="pt-24 pb-16 bg-forest-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-forest-950 mb-6 text-center">Wellness</h1>
          <p className="text-forest-700 text-lg mb-8 text-center">
            Doprajte si dokonalý relax v našom wellness centre. Čaká na vás moderná vírivka, fínska sauna a oddychová zóna s ležadlami. Wellness je ideálny na regeneráciu po turistike, športových aktivitách alebo ako súčasť súkromnej oslavy. Vychutnajte si súkromie a pokoj len pre vašu skupinu.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {gallery.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Wellness ${idx+1}`}
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
                alt={`Wellness ${modal.idx + 1}`}
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

export default EquipmentWellnessPage;
