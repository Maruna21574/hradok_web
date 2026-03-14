import React from 'react';
import ContactForm from '../components/ContactForm';
import { Users, Building2 } from 'lucide-react';

const InquirySection = () => (
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
);

export default InquirySection;
