import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Trees, Clock, Mountain, ShieldCheck, Heart, Coffee } from 'lucide-react';

const AboutPage = () => {
  const [equipment, setEquipment] = useState([
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
  ]);

  const [carouselIdx, setCarouselIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselTimeout = useRef<NodeJS.Timeout | null>(null);

  // Autoplay effect
  useEffect(() => {
    if (carouselTimeout.current) clearTimeout(carouselTimeout.current);
    carouselTimeout.current = setTimeout(() => {
      setCarouselIdx(i => (i + 1) % equipment.length);
    }, 4000);
    return () => {
      if (carouselTimeout.current) clearTimeout(carouselTimeout.current);
    };
  }, [carouselIdx, equipment.length]);

  // Responsive: detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dynamically calculate max height for all boxes
  const boxHeights = equipment.map(item => {
    // Estimate height based on text length (fallback for SSR)
    return 420 + Math.max(0, item.desc.length - 120) * 0.7;
  });
  const maxBoxHeight = Math.max(...boxHeights, 440);

  return (
    <>
      <Helmet>
        <title>O nás – Hotel Hrádok | Tradícia, rodinný hotel, Malá Fatra</title>
        <meta name="description" content="Hotel Hrádok – rodinný hotel v Malej Fatre. Tradícia, exkluzívny prenájom, súkromie, moderný komfort, história, Bystrička, Turiec, Martin, Žilina." />
        <meta name="keywords" content="hotel hrádok, o nás, história hotela, rodinný hotel, tradícia, Malá Fatra, Bystrička, exkluzívny prenájom, hotel Turiec, hotel Martin, hotel Žilina, horský hotel, súkromie, komfort, hotel pre skupiny, hotel pre rodiny, hotel Slovensko" />
        <meta property="og:title" content="O nás – Hotel Hrádok" />
        <meta property="og:description" content="Hotel Hrádok – tradícia, moderný komfort, exkluzívny prenájom v Malej Fatre. Súkromie, rodinný prístup, horské prostredie." />
        <meta property="og:image" content="/pics/hradok_den.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hotelhradok.eu/o-nas" />
        <meta property="og:locale" content="sk_SK" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="O nás – Hotel Hrádok" />
        <meta name="twitter:description" content="Hotel Hrádok – tradícia, moderný komfort, exkluzívny prenájom v Malej Fatre. Súkromie, rodinný prístup, horské prostredie." />
        <meta name="twitter:image" content="/pics/hradok_den.webp" />
      </Helmet>
      <>
        <header>
          <nav>{/* Prípadne Navbar */}</nav>
        </header>
        <main className="pt-24">
          <section className="section-padding bg-forest-50">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <article>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-forest-600 font-bold tracking-widest uppercase text-sm mb-4 block">Náš príbeh</span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-forest-950 mb-8 leading-tight">
                      Tradícia a moderný komfort v Malej Fatre
                    </h1>
                    <div className="space-y-6 text-forest-800 leading-relaxed text-lg">
                      <p>
                        Hotel Hrádok je situovaný v krásnej lokalite Malej Fatry v dedinke Bystrička medzi Veľkou dolinou a dolinou Lázky. Naše tiché horské prostredie je len 10 minút od rušnej hlavnej cesty, čo z nás robí ľahko dostupný, no dokonale izolovaný prístav pokoja.
                      </p>
                      <p>
                        Po kompletnej rekonštrukcii sme sa rozhodli pre unikátny koncept exkluzívneho prenájmu celého objektu. Veríme, že tie najdôležitejšie životné a pracovné momenty si zaslúžia absolútne súkromie a nerušenú atmosféru.
                      </p>
                    </div>
                  </motion.div>
                </article>
                <aside className="relative">
                  <img 
                    src="/pics/hradok_den.webp" 
                    alt="Hotel Hrádok" 
                    className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block border border-forest-100">
                    <p className="text-forest-600 font-serif italic text-xl">"Miesto, kde sa čas spomaľuje."</p>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold text-forest-950 mb-4">Prečo si vybrať nás?</h2>
                <p className="text-forest-600 max-w-2xl mx-auto">Naše hodnoty sú postavené na kvalite, súkromí a individuálnom prístupe.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: <ShieldCheck className="w-10 h-10" />, title: "Absolútne súkromie", desc: "Celý objekt patrí počas vášho pobytu výhradne vám. Žiadni iní hostia, žiadne vyrušovanie." },
                  { icon: <Heart className="w-10 h-10" />, title: "Rodinný prístup", desc: "Sme rodinný podnik a na každom detaile nám záleží. Budete sa u nás cítiť ako doma." },
                  { icon: <Coffee className="w-10 h-10" />, title: "Moderný komfort", desc: "Kompletná rekonštrukcia priniesla moderné vybavenie pri zachovaní horského charakteru." }
                ].map((item, idx) => (
                  <article key={idx} className="p-10 bg-forest-50 rounded-3xl border border-forest-100 hover:shadow-lg transition-all">
                    <div className="text-forest-600 mb-6">{item.icon}</div>
                    <h3 className="text-2xl font-bold font-serif text-forest-900 mb-4">{item.title}</h3>
                    <p className="text-forest-700 leading-relaxed">{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section-padding bg-forest-900 text-white">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-serif font-bold mb-8">Pripravení na nezabudnuteľný zážitok?</h2>
              <p className="text-forest-200 mb-12 max-w-2xl mx-auto text-lg">
                Či už plánujete svadbu snov alebo dôležitý firemný teambuilding, sme tu pre vás.
              </p>
              <Link to="/rezervacia" className="inline-block bg-white text-forest-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-forest-100 transition-all">
                Rezervovať objekt
              </Link>
            </div>
          </section>
        </main>
        <footer>{/* Prípadne Footer */}</footer>
      </>
    </>
  );
};

export default AboutPage;
