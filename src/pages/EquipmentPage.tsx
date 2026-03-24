import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import InquirySection from '../components/InquirySection';

const equipment = [
    {
      title: 'Vináreň',
      desc: 'Atmosférická vináreň vhodná na večerné posedenia alebo ochutnávky vín. Ideálne miesto na neformálne rozhovory a zážitky.',
      image: 'pics/vinaren/vinaren.webp',
      link: '/vybavenie/vinaren',
    },
    {
      title: 'Spoločenská miestnosť',
      desc: 'Priestranná spoločenská miestnosť vhodná na svadby, oslavy, prednášky či firemné prezentácie. Ideálne miesto na stretnutia a podujatia,',
      image: '/pics/spolocenska_miestnost/IMG_4635.webp',
      link: '/vybavenie/spolocenska-miestnost',
    },
  {
    title: 'Detský kútik',
    desc: 'Bezpečný a hravý priestor pre najmenších hostí s množstvom hračiek, hier a kreatívnych aktivít. Ideálne miesto pre deti počas rodinných osláv, svadieb či firemných akcií.',
    image: '/pics/detsky_kutik/AttelierKay..-1.webp',
    link: '/vybavenie/detsky-kutik',
  },
  {
    title: 'Wellness',
    desc: 'Oddychová zóna s vírivkou a saunou pre dokonalý relax počas pobytu. Ideálne miesto na regeneráciu po turistike alebo športových aktivitách.',
    image: '/pics/welness/AttelierKay..-13.webp',
    link: '/vybavenie/wellness',
  },
  {
    title: 'Kuchyňa',
    desc: 'Plne vybavená kuchyňa na prípravu vlastných jedál alebo catering. K dispozícii sú všetky potrebné spotrebiče a riad.',
    image: '/pics/kuchyna/AttelierKay..-39.webp',
    link: '/vybavenie/kuchyna',
  },
  {
    title: 'Bar',
    desc: 'Štýlový bar s možnosťou vlastného občerstvenia alebo obsluhy. Ideálne miesto na večerné posedenia a oslavy.',
    image: '/pics/bar/AttelierKay..-35.webp',
    link: '/vybavenie/bar',
  },
  {
    title: 'Herňa (biliard, šípky, pingpong)',
    desc: 'Spoločenská miestnosť s biliardom, šípkami a stolným tenisom pre zábavu všetkých vekových kategórií. Ideálne na večerné posedenia alebo turnaje.',
    image: '/pics/herna/AttelierKay..-56.webp',
    link: '/vybavenie/herna',
  },
  {
    title: 'Vonkajšia záhrada a ohnisko',
    desc: 'Rozľahlá záhrada s ohniskom, posedením a priestorom na hry a oddych. Ideálne na letné večery, rodinné oslavy či firemné teambuildingy.',
    image: '/pics/vonkajsia_zahrada/AttelierKay..-92.webp',
    link: '/vybavenie/zahrada-gril',
  },
  {
    title: 'Jedáleň',
    desc: 'Priestranná jedáleň na spoločné stolovanie, raňajky a večere. Ideálne miesto pre väčšie skupiny aj rodiny.',
    image: '/pics/jedalen/AttelierKay..-24.webp',
    link: '/vybavenie/jedalen',
  },
  {
    title: 'Ubytovanie',
    desc: 'Komfortné izby, apartmány a spoločné priestory pre váš pobyt. Vhodné pre rodiny, skupiny aj firemné akcie.',
    image: '/pics/ubytovanie/AttelierKay..-64.webp',
    link: '/vybavenie/ubytovanie',
  },
];

const EquipmentPage = () => {
  return (
    <>
      <Helmet>
        <title>Vybavenie – Hotel Hrádok | Wellness, bar, kuchyňa, herňa, záhrada, vináreň</title>
        <meta name="description" content="Kompletné vybavenie hotela Hrádok: wellness, detský kútik, kuchyňa, bar, herňa, záhrada s grilom, vináreň, jedáleň, ubytovanie. Súkromie, komfort, Malá Fatra, Bystrička." />
        <meta name="keywords" content="vybavenie hotel hrádok, wellness hotel, detský kútik, kuchyňa hotel, bar hotel, herňa hotel, záhrada s grilom, vináreň, jedáleň, ubytovanie, hotel Malá Fatra, hotel Bystrička, hotel pre skupiny, hotel pre rodiny, hotel Slovensko, komfort, súkromie" />
      </Helmet>
      <header>
        <nav>{/* Prípadne Navbar */}</nav>
      </header>
      <main className="pt-42 pb-16 bg-forest-50 min-h-screen">
        <section>
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-serif font-bold text-forest-950 mb-10 text-center">Vybavenie objektu</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {equipment.map((item, idx) => (
                <article key={idx}>
                  <Link
                    to={item.link}
                    className="bg-white rounded-3xl shadow-lg border border-forest-100 p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all group cursor-pointer"
                    style={{ textDecoration: 'none' }}
                  >
                    <img src={item.image} alt={item.title} className="w-full h-56 object-cover rounded-2xl mb-6 group-hover:scale-105 transition-transform" />
                    <h2 className="text-2xl font-bold font-serif text-forest-900 mb-2 group-hover:text-forest-600">{item.title}</h2>
                    <p className="text-forest-700 mb-2">{item.desc}</p>
                    <span className="mt-2 text-forest-500 font-semibold group-hover:underline">Zobraziť viac</span>
                  </Link>
                </article>
              ))}
            </div>
            <div className="mt-20">
              <InquirySection />
            </div>
          </div>
        </section>
      </main>
      <footer>{/* Prípadne Footer */}</footer>
    </>
  );
};

export default EquipmentPage;
