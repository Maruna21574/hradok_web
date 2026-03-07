import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Compass, Car, Train } from 'lucide-react';

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20893.34241512345!2d18.8654321!3d49.0345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714f96896896896%3A0x6896896896896896!2sBystri%C4%8Dka!5e0!3m2!1ssk!2ssk!4v1622313659700!5m2!1ssk!2ssk" 
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Martinské hole", type: "Turistika & Lyžovanie" },
              { title: "Gaderská dolina", type: "Príroda & Cyklistika" },
              { title: "Múzeum slovenskej dediny", type: "Kultúra" },
              { title: "Kúpele Turčianske Teplice", type: "Relax" }
            ].map((tip, i) => (
              <div key={i} className="p-6 bg-forest-50 rounded-2xl border border-forest-100">
                <p className="text-forest-500 text-xs font-bold uppercase tracking-widest mb-2">{tip.type}</p>
                <h4 className="text-xl font-bold text-forest-900">{tip.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
