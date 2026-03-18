import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Compass, Car, Train, Users, Building2 } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const LocationPage = () => {
  return (
    <div className="pt-24">
      <section className="section-padding bg-forest-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-forest-600 font-bold tracking-widest uppercase text-sm mb-4 block">Kde nás nájdete</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-forest-950 mb-8">
              V srdci Turčianskej záhradky
            </h1>
            <p className="text-forest-700 max-w-3xl mx-auto text-lg">
              Hotel Hrádok sa nachádza v malebnej dedinke Bystrička, na úpätí Malej Fatry. Naša poloha ponúka dokonalú rovnováhu medzi dostupnosťou a úplným tichom.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <Compass className="w-8 h-8" />, title: "Príroda", desc: "Situovaný medzi Veľkou dolinou a dolinou Lázky v tichom horskom prostredí." },
              { icon: <Car className="w-8 h-8" />, title: "Dostupnosť", desc: "Len 10 minút od hlavnej cesty a mesta Martin." },
              { icon: <MapPin className="w-8 h-8" />, title: "Región Turiec", desc: "Jeden z najkrajších a turistami najvyhľadávanejších regiónov Slovenska." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-forest-100">
                <div className="text-forest-600 mb-6">{item.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-forest-900 mb-4">{item.title}</h3>
                <p className="text-forest-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5406.456307004734!2d18.86432641356982!3d49.05414977123986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714f979c8b573c5%3A0xca98b403f2cd60ed!2zSG9yc2vDvSBob3RlbCBIcsOhZG9r!5e1!3m2!1ssk!2ssk!4v1773862518929!5m2!1ssk!2ssk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Mapa Hotel Hrádok"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-forest-950 mb-12 text-center">Tipy na výlety v okolí</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Compass className="w-8 h-8 text-forest-400 mb-4" />,
                title: "Martinské hole",
                type: "Turistika & Lyžovanie",
                desc: "Obľúbený horský areál s výhľadmi, zjazdovkami a turistickými chodníkmi."
              },
              {
                icon: <Compass className="w-8 h-8 text-forest-400 mb-4" />,
                title: "Gaderská dolina",
                type: "Príroda & Cyklistika",
                desc: "Malebná dolina vhodná na pešiu turistiku, cyklistiku a pikniky v prírode."
              },
              {
                icon: <MapPin className="w-8 h-8 text-forest-400 mb-4" />,
                title: "Múzeum slovenskej dediny",
                type: "Kultúra",
                desc: "Najväčší skanzen na Slovensku, ukážka tradičnej architektúry a života."
              },
              {
                icon: <Train className="w-8 h-8 text-forest-400 mb-4" />,
                title: "Kúpele Turčianske Teplice",
                type: "Relax",
                desc: "Moderné kúpeľné centrum s wellness, bazénmi a liečivými prameňmi."
              },
              {
                icon: <Car className="w-8 h-8 text-forest-400 mb-4" />,
                title: "Jazero Zelená voda",
                type: "Relax & Príroda",
                desc: "Pokojné jazero vhodné na oddych, rybolov a prechádzky."
              },
              {
                icon: <Compass className="w-8 h-8 text-forest-400 mb-4" />,
                title: "Veľká Fatra",
                type: "Turistika & Výhľady",
                desc: "Rozsiahle pohorie s množstvom trás, výhľadov a prírodných krás."
              },
              {
                icon: <MapPin className="w-8 h-8 text-forest-400 mb-4" />,
                title: "Hrad Sklabiňa",
                type: "História",
                desc: "Zrúcanina hradu s výhľadom na Turiec, ideálne miesto na výlet a fotenie."
              },
              {
                icon: <Car className="w-8 h-8 text-forest-400 mb-4" />,
                title: "Lanový park Turiec",
                type: "Zábava & Relax",
                desc: "Dobrodružný lanový park pre deti aj dospelých, prekážky, zipline a adrenalín v prírode."
              },
              {
                icon: <Compass className="w-8 h-8 text-forest-400 mb-4" />,
                title: "Blatnický hrad",
                type: "História & Turistika",
                desc: "Výstup na hrad s krásnym výhľadom, vhodné aj pre rodiny s deťmi."
              }
            ].map((tip, i) => (
              <div key={i} className="p-8 bg-forest-50 rounded-3xl border border-forest-100 shadow-md flex flex-col items-center text-center hover:bg-forest-100 transition-all">
                {tip.icon}
                <p className="text-forest-500 text-xs font-bold uppercase tracking-widest mb-2">{tip.type}</p>
                <h4 className="text-2xl font-bold text-forest-900 mb-2 font-serif">{tip.title}</h4>
                <p className="text-forest-700 text-sm mb-2">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-forest-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-forest-950 mb-6">Máte záujem o prenájom?</h2>
              <p className="text-forest-800 text-lg leading-relaxed mb-8">
                Či už plánujete svadbu, firemnú akciu alebo rodinnú oslavu, sme tu, aby sme vám pomohli s každým detailom. Vyplňte formulár a my sa vám ozveme s nezáväznou ponukou.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-forest-700">
                  <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-600">
                    <Users className="w-5 h-5" />
                  </div>
                  <span>Individuálny prístup</span>
                </div>
                <div className="flex items-center gap-3 text-forest-700">
                  <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-600">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span>Kompletné zázemie</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
