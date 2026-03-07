import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  Building2, 
  Wine, 
  Tent, 
  ChevronRight, 
  X 
} from 'lucide-react';

export const services = [
  {
    id: 'svadby',
    title: "Svadby",
    desc: "Kompletný prenájom pre váš veľký deň v súkromí hôr.",
    longDesc: "Váš svadobný deň si zaslúži výnimočné miesto. Ponúkame exkluzívny prenájom celého objektu, čo zaručuje absolútne súkromie pre vás a vašich hostí. Naše priestory sú ideálne pre romantické svadby a jubileá.",
    features: ["Kapacita do 40 hostí", "Ubytovanie pre svadobčanov", "Možnosť obradu v prírode", "Kompletný catering na mieru"],
    icon: <Star className="w-8 h-8" />,
    image: "/src/pics/hradok_svadba_5.webp",
    gallery: [
      "/src/pics/hradok_svadba_5.webp",
      "/src/pics/hradok_svadba_dialka.webp",
      "/src/pics/hradok_svadba_kolaz.webp",
      "/src/pics/hradok_svadba.webp"
    ]
  },
  {
    id: 'firmy',
    title: "Firemné akcie",
    desc: "Teambuildingy a konferencie v nerušenom prostredí.",
    longDesc: "Vymeňte mestský ruch za inšpiratívne horské prostredie. Hotel Hrádok je ideálnym miestom pre vaše firemné výjazdy, strategické plánovania alebo teambuildingové aktivity, ktoré posilnia váš tím.",
    features: ["Konferenčná technika", "Wi-Fi v celom objekte", "Outdoorové aktivity", "Súkromná vináreň pre večerný program"],
    icon: <Building2 className="w-8 h-8" />,
    image: "/src/pics/hradok_team_2.webp",
    gallery: [
      "/src/pics/hradok_team.webp",
      "/src/pics/hradok_team_2.webp",
      "/src/pics/hradok_team_1.webp"
    ]
  },
  {
    id: 'oslavy',
    title: "Oslavy",
    desc: "Priestor pre rodinné a firemné oslavy v prírode.",
    longDesc: "Hotel Hrádok je ideálnym miestom pre vaše rodinné oslavy, jubileá, firemné večierky či stretnutia. Ponúkame súkromie, komfort a kompletné zázemie pre nezabudnuteľné zážitky.",
    features: ["Kapacita do 40 hostí", "Ubytovanie", "Kompletný catering", "Možnosť oslavy v exteriéri"],
    icon: <Star className="w-8 h-8" />,
    image: "/src/pics/hradok_50.webp",
    gallery: [
      "/src/pics/hradok_50_1.webp",
      "/src/pics/hradok_50.webp"
    ]
  },
  {
    id: 'tabory',
    title: "Detské tábory",
    desc: "Ideálne priestory pre organizované detské podujatia.",
    longDesc: "Bezpečné a podnetné prostredie pre detské tábory, školy v prírode alebo športové sústredenia. Naša poloha mimo hlavnej cesty zaručuje bezpečnosť a priamy kontakt s prírodou.",
    features: ["Bezpečný areál", "Blízkosť turistických chodníkov", "Domáca strava", "Spoločenské hry a vybavenie"],
    icon: <Tent className="w-8 h-8" />,
    image: "/src/pics/hradok_tabor_2.webp",
    gallery: [
      "/src/pics/hradok_tabor.webp",
      "/src/pics/hradok_tabor_3.webp",
      "/src/pics/hradok_tabor_2.webp"
    ]
  }
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<null | typeof services[0]>(null);

  return (
    <section id="sluzby" className="section-padding bg-forest-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-500/10 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-center">
          <div>
            <span className="text-forest-300 font-bold tracking-widest uppercase text-sm mb-4 block">Čo ponúkame</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Váš súkromný <br /> priestor pre akcie
            </h2>
            <p className="text-forest-200 mb-10 text-lg leading-relaxed">
              Ponúkame kompletné zázemie pre vaše podujatia, od ubytovania až po gastronomické zážitky v našej vinárni.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-forest-300">
                <div className="w-1.5 h-1.5 rounded-full bg-forest-400" />
                <span className="text-sm">Exkluzivita</span>
              </div>
              <div className="flex items-center gap-2 text-forest-300">
                <div className="w-1.5 h-1.5 rounded-full bg-forest-400" />
                <span className="text-sm">Súkromie</span>
              </div>
              <div className="flex items-center gap-2 text-forest-300">
                <div className="w-1.5 h-1.5 rounded-full bg-forest-400" />
                <span className="text-sm">Komfort</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedService(s)}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group cursor-pointer"
              >
                <div className="text-forest-300 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-forest-300 text-sm leading-relaxed mb-4">
                  {s.desc}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-forest-400 uppercase tracking-wider group-hover:text-white transition-colors">
                  Zobraziť detail <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-forest-950/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white text-forest-950 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 bg-forest-100 rounded-full text-forest-900 hover:bg-forest-200 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-full">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-forest-100 text-forest-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      Exkluzívny prenájom
                    </span>
                    <div className="text-forest-600">{selectedService.icon}</div>
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-6">{selectedService.title}</h3>
                  <p className="text-forest-800 leading-relaxed mb-8">
                    {selectedService.longDesc}
                  </p>
                  
                  <div className="space-y-3">
                    <p className="font-bold text-sm uppercase tracking-widest text-forest-500 mb-4">Čo získate:</p>
                    {selectedService.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-forest-700">
                        <div className="w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center shrink-0">
                          <ChevronRight className="w-3 h-3 text-forest-600" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 mt-10">
                    <button 
                      onClick={() => {
                        setSelectedService(null);
                        window.location.href = '/kontakt';
                      }}
                      className="w-full bg-forest-600 text-white py-4 rounded-xl font-bold hover:bg-forest-700 transition-all"
                    >
                      Mám záujem o túto službu
                    </button>
                    <button 
                      onClick={() => {
                        window.location.href = `/sluzby/${selectedService.id}`;
                      }}
                      className="w-full bg-forest-100 text-forest-900 py-4 rounded-xl font-bold hover:bg-forest-200 transition-all"
                    >
                      Zobraziť viac
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;
