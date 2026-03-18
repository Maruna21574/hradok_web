import React from 'react';
import ContactForm from '../components/ContactForm';
import { Users, Building2, Mail, Phone } from 'lucide-react';

const InquirySection = () => (
  <section className="section-padding bg-forest-50">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-serif font-bold text-forest-950 mb-6">Máte záujem o prenájom?</h2>
          <p className="text-forest-800 text-lg leading-relaxed mb-8">
            Či už plánujete svadbu, firemnú akciu alebo rodinnú oslavu, sme tu, aby sme vám pomohli s každým detailom. Vyplňte formulár a my sa vám ozveme s nezáväznou ponukou.
          </p>
          <div className="space-y-4 mb-6">
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
          <div className="mt-8 mb-3 font-bold text-forest-900 uppercase tracking-wide text-sm">Kontakt</div>
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
        <ContactForm />
      </div>
    </div>
  </section>
);

export default InquirySection;
