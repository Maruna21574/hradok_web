import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { Calendar, Users, Building2, Wine, Star, CheckCircle2, Mail, Phone } from 'lucide-react';

const BookingPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    try {
      const response = await fetch('https://api.hotelhradok.eu/mail.php', {
        method: 'POST',
        body: formData
      });
      const result = await response.json().catch(() => null);
      if (!response.ok) {
        setIsSubmitting(false);
        setError(result && result.error ? 'Chyba: ' + result.error : 'Chyba pri odoslaní dopytu.');
        return;
      }
      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      setIsSubmitting(false);
      setError((err as any).message || 'Chyba pri odoslaní.');
    }
  };

  if (submitted) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center bg-forest-50 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-3xl shadow-xl text-center border border-forest-100"
        >
          <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center text-forest-600 mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-forest-950 mb-4">Dopyt odoslaný!</h2>
          <p className="text-forest-700 mb-8 leading-relaxed">
            Ďakujeme za váš záujem o rezerváciu hotela Hrádok. Naši kolegovia vás budú kontaktovať v priebehu 24 hodín s cenovou ponukou.
              <Helmet>
                <title>Rezervácia – Hotel Hrádok</title>
                <meta name="description" content="Rezervujte si exkluzívny prenájom hotela Hrádok pre svadby, oslavy, firemné akcie a teambuilding v Malej Fatre. Súkromie, komfort, zážitky." />
                <meta name="keywords" content="rezervácia, hotel hrádok, svadba, firemná akcia, prenájom, Malá Fatra, ubytovanie, event, teambuilding, oslavy, hotel Bystrička, hotel Turiec, hotel Martin, hotel Žilina" />
                <meta property="og:title" content="Rezervácia – Hotel Hrádok" />
                <meta property="og:description" content="Rezervujte si exkluzívny prenájom hotela Hrádok pre svadby, oslavy, firemné akcie a teambuilding v Malej Fatre. Súkromie, komfort, zážitky." />
                <meta property="og:image" content="/pics/hradok_den.webp" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://hotelhradok.eu/rezervacia" />
                <meta property="og:locale" content="sk_SK" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Rezervácia – Hotel Hrádok" />
                <meta name="twitter:description" content="Rezervujte si exkluzívny prenájom hotela Hrádok pre svadby, oslavy, firemné akcie a teambuilding v Malej Fatre. Súkromie, komfort, zážitky." />
                <meta name="twitter:image" content="/pics/hradok_den.webp" />
              </Helmet>
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full bg-forest-600 text-white py-4 rounded-xl font-bold hover:bg-forest-700 transition-all"
          >
            Späť na úvod
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <section className="section-padding bg-forest-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-forest-600 font-bold tracking-widest uppercase text-sm mb-4 block">Rezervácia objektu</span>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-forest-950 mb-8 leading-tight">
                Hotel Hrádok – Rezervácia termínu
              </h1>
              <h2 className="text-3xl font-serif font-bold text-forest-900 mb-6">Naplánujte si svoju akciu u nás</h2>
              <p className="text-forest-700 text-lg mb-12 leading-relaxed">
                Vyplňte prosím nezáväzný rezervačný formulár. Náš tím sa vám ozve, aby sme doladili všetky detaily vašej svadby, oslavy alebo firemného podujatia.
              </p>

              <div className="space-y-6">
                {[
                  { icon: <Star className="w-6 h-6" />, title: "Exkluzívny prenájom", desc: "Celý hotel len pre vás a vašich hostí." },
                  { icon: <Building2 className="w-6 h-6" />, title: "Ubytovanie", desc: "12 komfortných izieb pre vašich hostí." },
                  { icon: <Wine className="w-6 h-6" />, title: "Gastronómia", desc: "Možnosť cateringu a využitia vinárne." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-forest-100 shadow-sm">
                    <div className="text-forest-600 shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-forest-900">{item.title}</h4>
                      <p className="text-sm text-forest-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Kontakt info block */}
              <div className="mt-8 mb-8">
                <div className="font-bold text-forest-900 uppercase tracking-wide text-sm mb-3">Kontakt</div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-forest-800">
                    <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-600">
                      <Phone className="w-5 h-5" />
                    </div>
                    <a href="tel:+421905500950" className="hover:underline text-forest-700 font-medium">+421 905 500 950</a>
                  </div>
                  <div className="flex items-center gap-3 text-forest-800">
                    <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-600">
                      <Mail className="w-5 h-5" />
                    </div>
                    <a href="mailto:info@hotelhradok.eu" className="hover:underline text-forest-700 font-medium">info@hotelhradok.eu</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl border border-forest-100 h-fit">
              <h2 className="text-2xl font-serif font-bold text-forest-900 mb-8">Rezervačný formulár</h2>
              {error && <div className="text-red-600 mb-4 font-bold">{error}</div>}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-forest-700 mb-2">Meno a priezvisko</label>
                    <input required type="text" name="name" className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-forest-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-forest-700 mb-2">Email</label>
                    <input required type="email" name="email" className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-forest-50" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-forest-700 mb-2">Telefón</label>
                    <input required type="tel" name="phone" className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-forest-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-forest-700 mb-2">Typ podujatia</label>
                    <select name="eventType" className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-forest-50">
                      <option>Svadba</option>
                      <option>Rodinná oslava</option>
                      <option>Firemná akcia / Teambuilding</option>
                      <option>Iné</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-forest-700 mb-2">Dátum (od)</label>
                    <input required type="date" name="dateFrom" className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-forest-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-forest-700 mb-2">Dátum (do)</label>
                    <input required type="date" name="dateTo" className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-forest-50" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-forest-700 mb-2">Predpokladaný počet hostí</label>
                  <input required type="number" min="1" max="50" name="guests" className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-forest-50" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-forest-700 mb-2">Doplňujúce informácie</label>
                  <textarea rows={4} name="extraInfo" className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-forest-50" placeholder="Špeciálne požiadavky, catering, program..."></textarea>
                </div>

                <button type="submit" className="w-full bg-forest-600 text-white py-4 rounded-xl font-bold hover:bg-forest-700 transition-all shadow-lg shadow-forest-900/20">
                  Odoslať nezáväzný dopyt
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
