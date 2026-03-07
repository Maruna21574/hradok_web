import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Trees, Clock, Building2, Users, ChevronRight } from 'lucide-react';
import ServicesSection from '../components/ServicesSection';
import ContactForm from '../components/ContactForm';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
          <img 
            src="/pics/hradok_noc.webp" 
            alt="Malá Fatra Mountains" 
            className="w-full h-full object-cover scale-105"
          />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-forest-950/80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
            Vitajte v srdci Malej Fatry
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-[1.1] mb-8">
            Exkluzívny prenájom <br />
            <span className="italic text-forest-300">pre vaše akcie</span>
          </h1>
          <p className="text-white/100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Prenajmite si celý objekt hotela Hrádok pre vašu svadbu, oslavu alebo firemný teambuilding v srdci Malej Fatry.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/rezervacia" className="w-full sm:w-auto bg-white text-forest-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-forest-100 transition-all transform hover:scale-105 text-center">
              Rezervovať celý objekt
            </Link>
            <Link to="/sluzby" className="w-full sm:w-auto bg-transparent border border-white/40 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all text-center">
              Naše služby
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

const AboutPreview = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Visual Side */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img 
                  src="/pics/hradok_zaber.webp" 
                  alt="Hotel Hrádok Exterior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-10 -right-10 bg-forest-900 text-white p-12 rounded-[2.5rem] shadow-2xl hidden md:block max-w-[240px]"
              >
                <p className="text-5xl font-serif font-bold mb-2 italic">12</p>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-forest-400 leading-tight">
                  Komfortných izieb <br /> v srdci prírody
                </p>
              </motion.div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-forest-50 rounded-full -z-10" />
            <div className="absolute top-1/2 -right-10 w-32 h-32 border border-forest-100 rounded-full -z-10" />
          </div>

          {/* Text Side */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-forest-600 font-bold uppercase tracking-[0.3em] text-xs mb-8 block">O našom hotely</span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-forest-950 mb-10 leading-[0.9] tracking-tighter">
                Váš súkromný <br />
                <span className="italic text-forest-600">horský rezort</span>
              </h2>
              
              <div className="space-y-8 text-forest-800 text-xl leading-relaxed font-light">
                <p>
                  Hotel Hrádok prináša unikátnu filozofiu <strong className="font-bold text-forest-950">exkluzívneho prenájmu celého objektu</strong>. U nás nenájdete náhodných hostí – celý priestor, personál a zázemie patria počas vášho pobytu výhradne vám.
                </p>
                <p className="border-l-2 border-forest-200 pl-8 italic text-forest-600">
                  Sme ideálnym útočiskom pre nezabudnuteľné svadby, rodinné jubileá, firemné stratégie a teambuildingy, ktoré vyžadujú absolútne súkromie.
                </p>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <Link to="/o-nas" className="group flex items-center gap-4 bg-forest-950 text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-forest-800">
                  Viac o nás
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <ServicesSection />
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

export default HomePage;
