import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { services } from '../components/ServicesSection';
import { ChevronRight, CheckCircle2, ArrowLeft, Calendar, Users, Star, ShieldCheck, MapPin, Home } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif font-bold text-forest-950 mb-6">Služba nebola nájdená</h1>
        <Link to="/sluzby" className="bg-forest-600 text-white px-8 py-3 rounded-full font-bold hover:bg-forest-700 transition-all">
          Späť na služby
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section - Editorial Style */}
      <section className="relative min-h-[85vh] w-full overflow-hidden flex items-end pb-20">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/sluzby" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors uppercase tracking-widest text-xs font-bold">
              <ArrowLeft className="w-4 h-4" /> Všetky služby
            </Link>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-forest-600/30 backdrop-blur-md border border-forest-400/30 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                Exkluzívny prenájom celého objektu
              </span>
              <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                Súkromie v srdci hôr
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white font-bold leading-[0.9] mb-6 tracking-tighter">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mb-10 leading-relaxed">
              {service.desc}
            </p>
            <div className="flex flex-wrap gap-6 text-white/80 text-sm uppercase tracking-widest font-bold">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-forest-400" /> Kapacita do 100 osôb
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-forest-400" /> Celoročná prevádzka
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-forest-400" /> Exkluzívny prenájom
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights Bar */}
      <section className="bg-forest-50 py-12 border-b border-forest-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-100 flex items-center justify-center text-forest-600 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-forest-500 text-[10px] uppercase tracking-widest font-bold mb-1">Model prenájmu</p>
                <p className="text-forest-950 font-serif font-bold text-lg leading-tight">Exkluzívny & Súkromný</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-100 flex items-center justify-center text-forest-600 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-forest-500 text-[10px] uppercase tracking-widest font-bold mb-1">Kapacita</p>
                <p className="text-forest-950 font-serif font-bold text-lg leading-tight">Do 100 hostí</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-100 flex items-center justify-center text-forest-600 shrink-0">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <p className="text-forest-500 text-[10px] uppercase tracking-widest font-bold mb-1">Ubytovanie</p>
                <p className="text-forest-950 font-serif font-bold text-lg leading-tight">40 pevných lôžok</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-100 flex items-center justify-center text-forest-600 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-forest-500 text-[10px] uppercase tracking-widest font-bold mb-1">Lokalita</p>
                <p className="text-forest-950 font-serif font-bold text-lg leading-tight">Srdce hôr, bez susedov</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - Split Layout */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <span className="text-forest-600 font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Detailný popis</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-950 mb-10 leading-tight">
                {service.title} <br />
                <span className="italic text-forest-600">v absolútnom súkromí</span>
              </h2>
              <p className="text-forest-800 text-xl leading-relaxed mb-12 font-light">
                {service.longDesc}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {service.features.map((feature, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex items-center gap-4 p-5 rounded-2xl border border-forest-100 hover:border-forest-200 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-forest-50 flex items-center justify-center text-forest-600 group-hover:bg-forest-600 group-hover:text-white transition-all">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-forest-900">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-forest-50 rounded-full -z-10" />
                <div className="bg-forest-50 p-8 md:p-10 rounded-[2.5rem] border border-forest-100">
                  <h3 className="text-2xl font-serif font-bold text-forest-950 mb-6">Máte záujem o túto službu?</h3>
                  <p className="text-forest-700 mb-8 leading-relaxed">
                    Každú akciu plánujeme individuálne podľa vašich predstáv. Vyplňte formulár a my sa vám ozveme s nezáväznou ponukou.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-[500px] rounded-[3rem] overflow-hidden shadow-2xl group">
              <img 
                src={service.image} 
                alt="Detail 1" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col gap-8">
              <div className="h-[234px] rounded-[3rem] overflow-hidden shadow-xl group">
                <img 
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000" 
                  alt="Detail 2" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="bg-forest-900 p-12 rounded-[3rem] text-white flex flex-col justify-center h-[234px]">
                <p className="text-4xl font-serif font-bold mb-2">100%</p>
                <p className="text-forest-300 uppercase tracking-widest text-xs font-bold">Súkromie a exkluzivita</p>
                <p className="mt-4 text-forest-200 text-sm">Celý objekt patrí len vám a vašim hosťom.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
            Pripravíme pre vás <span className="italic text-forest-400">nezabudnuteľný zážitok</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/rezervacia" className="w-full sm:w-auto bg-white text-forest-900 px-10 py-4 rounded-full font-bold hover:bg-forest-100 transition-all transform hover:scale-105">
              Rezervovať termín
            </Link>
            <Link to="/kontakt" className="w-full sm:w-auto border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Kontaktujte nás
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
