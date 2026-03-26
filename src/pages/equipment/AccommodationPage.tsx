  import React, { useState } from "react";
  import { Helmet } from "react-helmet-async";
  import InquirySection from "../../components/InquirySection";

  const galleryImages = [
    "/pics/ubytovanie/AttelierKay..-42.webp",
    "/pics/ubytovanie/AttelierKay..-43.webp",
    "/pics/ubytovanie/AttelierKay..-44.webp",
    "/pics/ubytovanie/AttelierKay..-45.webp",
    "/pics/ubytovanie/AttelierKay..-46.webp",
    "/pics/ubytovanie/AttelierKay..-47.webp",
    "/pics/ubytovanie/AttelierKay..-48.webp",
    "/pics/ubytovanie/AttelierKay..-49.webp",
    "/pics/ubytovanie/AttelierKay..-50.webp",
    "/pics/ubytovanie/AttelierKay..-51.webp",
    "/pics/ubytovanie/AttelierKay..-52.webp",
    "/pics/ubytovanie/AttelierKay..-53.webp",
    "/pics/ubytovanie/AttelierKay..-54.webp",
    "/pics/ubytovanie/AttelierKay..-55.webp",
    "/pics/ubytovanie/AttelierKay..-62.webp",
    "/pics/ubytovanie/AttelierKay..-63.webp",
    "/pics/ubytovanie/AttelierKay..-64.webp",
    "/pics/ubytovanie/AttelierKay..-65.webp",
    "/pics/ubytovanie/AttelierKay..-66.webp",
    "/pics/ubytovanie/AttelierKay..-67.webp",
  ];

  const AccommodationPage = () => {
    const [modal, setModal] = useState({ open: false, idx: 0 });
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
            {/* Galéria izieb */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {galleryImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Ubytovanie ${idx + 1}`}
                  className="w-full h-64 object-cover rounded-2xl shadow cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setModal({ open: true, idx })}
                />
              ))}
            </div>

            {/* Izby a kapacity */}
            <section className="mb-12 mt-30">
              <h2 className="text-2xl font-serif font-bold text-forest-900 mb-4 text-center">Prehľad izieb a kapacít</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-2xl shadow border border-forest-100 text-left">
                  <thead>
                    <tr className="bg-forest-100 text-forest-900">
                      <th className="py-3 px-4 font-bold">Izba</th>
                      <th className="py-3 px-4 font-bold">Typ</th>
                      <th className="py-3 px-4 font-bold">Lôžka</th>
                      <th className="py-3 px-4 font-bold">Prístelka</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-forest-50">
                    <tr>
                      <td className="py-2 px-4">Izba č.1</td>
                      <td className="py-2 px-4">Dvojlôžková (manželská posteľ)</td>
                      <td className="py-2 px-4">2</td>
                      <td className="py-2 px-4">-</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Izba č.2</td>
                      <td className="py-2 px-4">Dvojlôžková (manželská posteľ)</td>
                      <td className="py-2 px-4">2</td>
                      <td className="py-2 px-4">1</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Izba č.3</td>
                      <td className="py-2 px-4">Dvojlôžková (manželská posteľ)</td>
                      <td className="py-2 px-4">2</td>
                      <td className="py-2 px-4">1</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Izba č.4</td>
                      <td className="py-2 px-4">Dvojlôžková (manželská posteľ)</td>
                      <td className="py-2 px-4">2</td>
                      <td className="py-2 px-4">-</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Izba č.5</td>
                      <td className="py-2 px-4">Rodinná dvoj-spálňová<br/><span className='text-xs text-forest-600'>1. spálňa: manželská posteľ<br/>2. spálňa: 2x manželská posteľ, 1x jednolôžko</span></td>
                      <td className="py-2 px-4">6</td>
                      <td className="py-2 px-4">1</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Izba č.6</td>
                      <td className="py-2 px-4">Rodinná dvoj-spálňová<br/><span className='text-xs text-forest-600'>1. spálňa: manželská posteľ<br/>2. spálňa: 2x samostatná posteľ</span></td>
                      <td className="py-2 px-4">4</td>
                      <td className="py-2 px-4">-</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Izba č.7</td>
                      <td className="py-2 px-4">Rodinná dvoj-spálňová<br/><span className='text-xs text-forest-600'>1. spálňa: manželská posteľ<br/>2. spálňa: 2x samostatná posteľ</span></td>
                      <td className="py-2 px-4">4</td>
                      <td className="py-2 px-4">1</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Izba č.8</td>
                      <td className="py-2 px-4">Rodinná dvoj-spálňová<br/><span className='text-xs text-forest-600'>1. spálňa: manželská posteľ<br/>2. spálňa: jednolôžko</span></td>
                      <td className="py-2 px-4">3</td>
                      <td className="py-2 px-4">-</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Izba č.9</td>
                      <td className="py-2 px-4">Štvorlôžková (manželská posteľ, 2x samostatná posteľ)</td>
                      <td className="py-2 px-4">4</td>
                      <td className="py-2 px-4">-</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Izba č.10</td>
                      <td className="py-2 px-4">Dvojlôžková (manželská posteľ)</td>
                      <td className="py-2 px-4">2</td>
                      <td className="py-2 px-4">1</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Izba č.11</td>
                      <td className="py-2 px-4">Štvorlôžková (manželská posteľ, 2x samostatná posteľ)</td>
                      <td className="py-2 px-4">4</td>
                      <td className="py-2 px-4">-</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Izba č.12</td>
                      <td className="py-2 px-4">Dvojlôžková (manželská posteľ)</td>
                      <td className="py-2 px-4">2</td>
                      <td className="py-2 px-4">1</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="bg-forest-50 font-bold">
                      <td colSpan={2} className="py-3 px-4 text-right">Celková kapacita</td>
                      <td className="py-3 px-4">37</td>
                      <td className="py-3 px-4">6</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </section>

            {/* Extra capacity info */}
            <div className="bg-forest-50 border border-forest-200 rounded-2xl p-6 mb-8 mt-2 text-center">
              <h2 className="text-xl font-bold text-forest-900 mb-2">Potrebujete väčšiu kapacitu ubytovania?</h2>
              <p className="text-forest-800 text-base font-light">
                V prípade záujmu o väčší počet ubytovaných spolupracujeme s neďaleko vzdialeným <b>Penziónom Eso</b> (25 izieb, 50 pevných lôžok).
              </p>
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
                  onClick={() => setModal(m => ({ open: true, idx: (m.idx - 1 + galleryImages.length) % galleryImages.length }))}
                  aria-label="Predchádzajúca fotka"
                >
                  ‹
                </button>
                <img
                  src={galleryImages[modal.idx]}
                  alt={`Ubytovanie ${modal.idx + 1}`}
                  className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl border-4 border-white"
                  style={{ objectFit: 'contain' }}
                />
                <button
                  className="absolute right-4 md:right-12 text-white text-4xl font-bold bg-black/40 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70 transition"
                  onClick={() => setModal(m => ({ open: true, idx: (m.idx + 1) % galleryImages.length }))}
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

  export default AccommodationPage;
