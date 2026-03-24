import React from "react";

const CapacityInfo = () => {
  return (
    <section className="py-20 bg-forest-100/60">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-950 mb-4">Celková kapacita hotela</h2>
        <p className="text-forest-800 text-lg md:text-xl mb-6">
          Hotel Hrádok ponúka <span className="font-bold text-forest-900">12 izieb</span> s celkovou kapacitou <span className="font-bold text-forest-900">37 lôžok</span> a <span className="font-bold text-forest-900">5 prísteliek</span>.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-8 mt-8">
          <div className="bg-white rounded-2xl shadow p-8 flex-1">
            <div className="text-5xl font-serif font-bold text-forest-900 mb-2">12</div>
            <div className="text-xs uppercase tracking-widest text-forest-600">Izieb</div>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 flex-1">
            <div className="text-5xl font-serif font-bold text-forest-900 mb-2">37</div>
            <div className="text-xs uppercase tracking-widest text-forest-600">Lôžok</div>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 flex-1">
            <div className="text-5xl font-serif font-bold text-forest-900 mb-2">6</div>
            <div className="text-xs uppercase tracking-widest text-forest-600">Prísteliek</div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="/vybavenie/ubytovanie"
            className="inline-block bg-forest-300 text-forest-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-forest-200 transition-all text-center shadow"
          >
            Zobraziť všetky izby a vybavenie
          </a>
        </div>
      </div>
    </section>
  );
};

export default CapacityInfo;
