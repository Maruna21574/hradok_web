import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <>
      <header>
        <nav>{/* Prípadne Navbar */}</nav>
      </header>
      <main className="pt-24">
        <section className="section-padding bg-forest-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-forest-600 font-bold tracking-widest uppercase text-sm mb-4 block">Sme tu pre vás</span>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-forest-950 mb-8">
                Napíšte nám alebo zavolajte
              </h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <article>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-forest-950 mb-8">Kontaktné informácie</h2>
                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-forest-600 shadow-sm shrink-0">
                        <MapPin className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="font-bold text-forest-900 text-xl">Adresa</p>
                        <p className="text-forest-700 text-lg">Bystrička, Malá Fatra, Slovensko</p>
                        <p className="text-forest-500 mt-1">Medzi Veľkou dolinou a dolinou Lázky</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-6">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-forest-600 shadow-sm shrink-0">
                        <Phone className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="font-bold text-forest-900 text-xl">Telefón</p>
                        <a href="tel:+421905500950" className="text-forest-700 text-lg hover:underline">+421 905 500 950</a>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-forest-600 shadow-sm shrink-0">
                        <Mail className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="font-bold text-forest-900 text-xl">Email</p>
                        <a href="mailto:info@hotelhradok.eu" className="text-forest-700 text-lg hover:underline">info@hotelhradok.eu</a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <p className="font-bold text-forest-900 mb-4">Sledujte nás</p>
                    <div className="flex gap-4">
                      <a href="#" className="w-12 h-12 bg-forest-600 text-white rounded-full flex items-center justify-center hover:bg-forest-700 transition-all">
                        <Facebook className="w-6 h-6" />
                      </a>
                      <a href="#" className="w-12 h-12 bg-forest-600 text-white rounded-full flex items-center justify-center hover:bg-forest-700 transition-all">
                        <Instagram className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </article>

              <aside>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <ContactForm />
                </motion.div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <footer>{/* Prípadne Footer */}</footer>
    </>
  );
};

export default ContactPage;
