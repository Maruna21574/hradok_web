
import React, { useState } from 'react';
import { motion } from 'motion/react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', formData.message);
    try {
      const response = await fetch('https://api.hotelhradok.eu/mail.php', {
        method: 'POST',
        body: formDataToSend
      });
      if (!response.ok) throw new Error('Chyba pri odoslaní dopytu.');
      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      setIsSubmitting(false);
      alert((err as any).message || 'Chyba pri odoslaní.');
    }
  };

  return (
    <div className="bg-white p-4 sm:p-10 rounded-3xl shadow-xl border border-forest-100">
      <h3 className="text-2xl font-serif font-bold text-forest-900 mb-6">Kontaktný formulár</h3>
      {submitted ? (
        <div className="text-center py-10">
          <div className="w-16 h-16 mx-auto mb-6 bg-forest-100 rounded-full flex items-center justify-center text-forest-600">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          </div>
          <h4 className="text-forest-900 font-bold text-xl mb-4">Vaša správa bola úspešne odoslaná!</h4>
          <p className="text-forest-700">Ďakujeme za váš dopyt. Náš tím vás bude kontaktovať v priebehu 24 hodín.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-forest-700 mb-2">Meno a priezvisko</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-forest-50"
                placeholder="Ján Novák"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-forest-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-forest-50"
                placeholder="jan.novak@example.com"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-forest-700 mb-2">Predmet</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-forest-50"
              placeholder="Mám záujem o..."
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-forest-700 mb-2">Vaša správa</label>
            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-forest-50"
              placeholder="Sem napíšte vašu správu..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-forest-600 text-white py-4 rounded-xl font-bold hover:bg-forest-700 transition-all shadow-lg shadow-forest-900/20 disabled:opacity-50"
          >
            {isSubmitting ? 'Odosielam...' : 'Odoslať dopyt'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
