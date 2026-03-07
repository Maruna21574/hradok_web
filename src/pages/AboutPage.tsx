import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Trees, Clock, Mountain, ShieldCheck, Heart, Coffee } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-24">
      <section className="section-padding bg-forest-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                  Hotela Hrádok je situovaný v krásnej lokalite Malej Fatry v dedinke Bystrička medzi Veľkou dolinou a dolinou Lázky. Naše tiché horské prostredie je len 10 minút od rušnej hlavnej cesty, čo z nás robí ľahko dostupný, no dokonale izolovaný prístav pokoja.
                </p>
                <p>
                  Po kompletnej rekonštrukcii sme sa rozhodli pre unikátny koncept exkluzívneho prenájmu celého objektu. Veríme, že tie najdôležitejšie životné a pracovné momenty si zaslúžia absolútne súkromie a nerušenú atmosféru.
                </p>
              </div>
            </motion.div>
            <div className="relative">
              <img 
                src="src\pics\hradok_den.webp" 
                alt="Hotel Hrádok" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block border border-forest-100">
                <p className="text-forest-600 font-serif italic text-xl">"Miesto, kde sa čas spomaľuje."</p>
              </div>
            </div>
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
              <div key={idx} className="p-10 bg-forest-50 rounded-3xl border border-forest-100 hover:shadow-lg transition-all">
                <div className="text-forest-600 mb-6">{item.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-forest-900 mb-4">{item.title}</h3>
                <p className="text-forest-700 leading-relaxed">{item.desc}</p>
              </div>
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
    </div>
  );
};

export default AboutPage;
