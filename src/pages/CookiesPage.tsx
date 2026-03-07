import React from 'react';

const CookiesPage = () => (
  <div className="max-w-3xl mx-auto py-24 px-6">
    <h1 className="text-4xl font-bold mb-8">Používanie cookies</h1>
    <p className="mb-6 text-lg">Táto stránka používa cookies na zlepšenie užívateľského zážitku, analýzu návštevnosti a personalizáciu obsahu. Cookies môžete spravovať vo svojom prehliadači. Viac informácií o typoch cookies a ich použití nájdete nižšie.</p>
    <ul className="list-disc pl-6 mb-8">
      <li>Technické cookies – nevyhnutné pre fungovanie stránky</li>
      <li>Analytické cookies – anonymné sledovanie návštevnosti</li>
      <li>Marketingové cookies – personalizácia reklám</li>
    </ul>
    <p className="text-sm text-forest-600">Pre viac informácií nás kontaktujte na info@hotelhradok.sk.</p>
  </div>
);

export default CookiesPage;
