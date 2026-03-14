import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const equipment = [
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
    title: 'Vonkajšia záhrada a gril',
    desc: 'Rozľahlá záhrada s grilom, posedením a priestorom na hry a oddych. Ideálne na letné večery, rodinné oslavy či firemné teambuildingy.',
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
        <title>Vybavenie – Hotel Hrádok</title>
        <meta name="description" content="Kompletné vybavenie hotela Hrádok: wellness, detský kútik, kuchyňa, bar, herňa, záhrada s grilom, vináreň a ďalšie." />
      </Helmet>
      <div className="pt-24 pb-16 bg-forest-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold text-forest-950 mb-10 text-center">Vybavenie objektu</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {equipment.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className="bg-white rounded-3xl shadow-lg border border-forest-100 p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all group cursor-pointer"
                style={{ textDecoration: 'none' }}
              >
                <img src={item.image} alt={item.title} className="w-full h-56 object-cover rounded-2xl mb-6 group-hover:scale-105 transition-transform" />
                <h2 className="text-2xl font-bold font-serif text-forest-900 mb-2 group-hover:text-forest-600">{item.title}</h2>
                <p className="text-forest-700 mb-2">{item.desc}</p>
                <span className="mt-2 text-forest-500 font-semibold group-hover:underline">Zobraziť viac</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentPage;
