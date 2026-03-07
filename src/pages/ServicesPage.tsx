import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { services } from '../components/ServicesSection';
import { ChevronRight, Star, Shield, Heart, Utensils, Wine, Flame, Coffee } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="pt-24 bg-white">
      {/* Hero Section */}
      <section className="section-padding border-b border-forest-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-forest-600 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Naše portfólio</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-forest-950 mb-10 leading-[0.9] tracking-tighter">
              Služby na mieru <br />
              <span className="italic text-forest-600">vašim potrebám</span>
            </h1>
            <p className="text-forest-800 text-xl md:text-2xl leading-relaxed font-light max-w-3xl">
              Špecializujeme sa na exkluzívny prenájom celého objektu pre uzavreté skupiny. Naše priestory sú navrhnuté tak, aby poskytovali maximálnu flexibilitu pre rôzne typy podujatí.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-forest-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-forest-600 font-bold uppercase tracking-widest text-xs mb-4 block">Čo ponúkame</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-950 mb-8 leading-tight">
                Váš súkromný <br /> priestor pre akcie
              </h2>
              <p className="text-forest-800 text-lg leading-relaxed mb-10">
                Ponúkame kompletné zázemie pre vaše podujatia, od ubytovania až po gastronomické zážitky v našej vinárni.
              </p>
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-forest-600 shadow-sm">
                    <Star className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-forest-900 text-sm uppercase tracking-widest">Exkluzivita</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-forest-600 shadow-sm">
                    <Shield className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-forest-900 text-sm uppercase tracking-widest">Súkromie</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-forest-600 shadow-sm">
                    <Heart className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-forest-900 text-sm uppercase tracking-widest">Komfort</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000" 
                alt="Event Space" 
                className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-forest-900 text-white p-10 rounded-[2.5rem] shadow-2xl hidden md:block">
                <p className="text-3xl font-serif font-bold mb-2 italic">100%</p>
                <p className="text-xs uppercase tracking-widest font-bold text-forest-400">Garancia súkromia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Portfolio Style */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
            {services.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link to={`/sluzby/${service.id}`} className="block overflow-hidden rounded-[2.5rem] mb-8 relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white">
                      <p className="text-xs font-bold uppercase tracking-widest mb-1">Kategória</p>
                      <p className="text-lg font-serif italic">{service.title}</p>
                    </div>
                  </div>
                </Link>
                <div className="flex justify-between items-start gap-8">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-forest-950 mb-4">{service.title}</h3>
                    <p className="text-forest-700 text-lg leading-relaxed mb-6 max-w-md">
                      {service.desc}
                    </p>
                    <Link 
                      to={`/sluzby/${service.id}`}
                      className="inline-flex items-center gap-2 text-forest-600 font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all"
                    >
                      Zobraziť detail <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="text-forest-100 font-serif text-8xl font-bold select-none">
                    0{i + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gastronomy Section */}
      <section className="py-32 bg-forest-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=2000" 
            alt="Wine Cellar" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-forest-400 font-bold uppercase tracking-widest text-xs mb-6 block">Gastronómia a Vináreň</span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-10 leading-tight">
                Chuť Turca v <br />
                <span className="italic text-forest-400">autentickom prostredí</span>
              </h2>
              <p className="text-forest-200 text-xl leading-relaxed mb-12 font-light">
                K exkluzívnemu prenájmu patrí aj možnosť využitia našej štýlovej vinárne a zabezpečenie cateringu. Spolupracujeme s lokálnymi dodávateľmi, aby sme vám priniesli tie najlepšie chute Turca.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-forest-400 group-hover:bg-forest-400 group-hover:text-forest-950 transition-all">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-sm uppercase tracking-widest">Domáca kuchyňa</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-forest-400 group-hover:bg-forest-400 group-hover:text-forest-950 transition-all">
                    <Wine className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-sm uppercase tracking-widest">Degustácie vín</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-forest-400 group-hover:bg-forest-400 group-hover:text-forest-950 transition-all">
                    <Flame className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-sm uppercase tracking-widest">Grilovačky na terase</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-forest-400 group-hover:bg-forest-400 group-hover:text-forest-950 transition-all">
                    <Coffee className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-sm uppercase tracking-widest">Coffee breaky pre firmy</span>
                </div>
              </div>

              <div className="mt-16 flex items-center gap-4">
                <div className="h-px flex-grow bg-white/20" />
                <span className="font-serif italic text-2xl text-forest-400">WineFood</span>
                <div className="h-px flex-grow bg-white/20" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800" 
                  alt="Wine" 
                  className="rounded-[2.5rem] h-80 w-full object-cover shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-forest-800 p-8 rounded-[2.5rem] border border-white/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-forest-400 mb-2">Lokálne suroviny</p>
                  <p className="text-sm text-forest-200">Podporujeme miestnych farmárov a výrobcov z regiónu Turiec.</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-forest-400 p-8 rounded-[2.5rem] text-forest-950">
                  <p className="text-xs font-bold uppercase tracking-widest mb-2">Výber vín</p>
                  <p className="text-sm font-medium">Viac ako 50 druhov archívnych vín v našej pivnici.</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1550966842-2849a2202768?auto=format&fit=crop&q=80&w=800" 
                  alt="Food" 
                  className="rounded-[2.5rem] h-80 w-full object-cover shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
