import React from 'react';

const GDPRPage = () => (
  <div className="max-w-3xl mx-auto py-24 px-6">
    <h1 className="text-4xl font-bold mb-8">GDPR – Ochrana osobných údajov</h1>
    <p className="mb-6 text-lg">
      Vaše súkromie je pre nás dôležité. V tejto sekcii nájdete informácie o tom, ako spracúvame a chránime vaše osobné údaje v súlade s nariadením GDPR.
    </p>
    <h2 className="text-2xl font-semibold mt-8 mb-2">1. Prevádzkovateľ</h2>
    <p className="mb-4">Horský hotel Hrádok, Bystrička, Slovensko, IČO: 12345678, info@hotelhradok.sk</p>
    <h2 className="text-2xl font-semibold mt-8 mb-2">2. Účel spracúvania údajov</h2>
    <ul className="list-disc pl-6 mb-4">
      <li>Rezervácia a poskytovanie ubytovacích a doplnkových služieb</li>
      <li>Komunikácia so zákazníkmi</li>
      <li>Marketingové účely (len so súhlasom)</li>
      <li>Plnenie zákonných povinností</li>
    </ul>
    <h2 className="text-2xl font-semibold mt-8 mb-2">3. Práva dotknutých osôb</h2>
    <ul className="list-disc pl-6 mb-4">
      <li>Právo na prístup k údajom</li>
      <li>Právo na opravu údajov</li>
      <li>Právo na výmaz (zabudnutie)</li>
      <li>Právo na obmedzenie spracúvania</li>
      <li>Právo namietať proti spracúvaniu</li>
      <li>Právo na prenosnosť údajov</li>
      <li>Právo podať sťažnosť dozornému orgánu</li>
    </ul>
    <h2 className="text-2xl font-semibold mt-8 mb-2">4. Kontaktné údaje</h2>
    <p className="mb-4">
      Ak máte otázky alebo požiadavky týkajúce sa ochrany osobných údajov, kontaktujte nás na <a href="mailto:info@hotelhradok.sk" className="text-blue-600 underline">info@hotelhradok.sk</a>.
    </p>
    <h2 className="text-2xl font-semibold mt-8 mb-2">5. Doba uchovávania údajov</h2>
    <p className="mb-4">Vaše údaje uchovávame len po dobu nevyhnutnú na splnenie účelu, na ktorý boli získané, alebo podľa zákonných požiadaviek.</p>
    <h2 className="text-2xl font-semibold mt-8 mb-2">6. Zabezpečenie údajov</h2>
    <p className="mb-4">Prijali sme primerané technické a organizačné opatrenia na ochranu vašich údajov pred stratou, zneužitím alebo neoprávneným prístupom.</p>
    <p className="text-sm text-forest-600 mt-8">Podrobné zásady ochrany osobných údajov vám radi poskytneme na vyžiadanie.</p>
  </div>
);

export default GDPRPage;
