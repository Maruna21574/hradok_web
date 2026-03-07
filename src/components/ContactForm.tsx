import React from 'react';
import { motion } from 'motion/react';

const ContactForm = () => {
  return (
    <div className="bg-white p-10 rounded-3xl shadow-xl border border-forest-100">
      <h3 className="text-2xl font-serif font-bold text-forest-900 mb-6">Kontaktný formulár</h3>
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-forest-700 mb-2">Meno a priezvisko</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-forest-50"
              placeholder="Ján Novák"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-forest-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-forest-50"
              placeholder="jan.novak@example.com"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold text-forest-700 mb-2">Predmet</label>
          <input 
            type="text" 
            className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-forest-50"
            placeholder="Mám záujem o..."
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-forest-700 mb-2">Vaša správa</label>
          <textarea 
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-forest-50"
            placeholder="Sem napíšte vašu správu..."
          ></textarea>
        </div>
        <button className="w-full bg-forest-600 text-white py-4 rounded-xl font-bold hover:bg-forest-700 transition-all shadow-lg shadow-forest-900/20">
          Odoslať dopyt
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
