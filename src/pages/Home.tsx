import { useState } from "react";
import { Link } from "react-router-dom";
import QuoteModal from "../components/QuoteModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="rounded-lg p-12 text-black">
          <h2 className="text-6xl font-black uppercase tracking-tighter text-[#F58220] text-800 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)] mb-4">
            Professional Concrete Services
          </h2>

          <p className="text-white text-5xl font-extrabold leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] max-w-2xl mb-8">
            Dingeman Concrete Inc. specializes in high-quality concrete
            solutions for residential, commercial, and decorative projects. With
            years of expertise, we deliver durable and beautiful results.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gray-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors text-lg"
          >
            Request a Quote
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <div className="bg-white text-center rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-black uppercase tracking-tighter bg-gradient-to-b from-[#E2E8F0] via-[#94A3B8] to-[#1E293B] bg-clip-text text-transparent drop-shadow-[2px_3px_0px_rgba(0,0,0,0.3)]">
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Commercial */}
          <Link
            to="/commercial"
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer border-t-4 border-blue-600"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Commercial
            </h3>
            <p className="text-gray-600 mb-6">
              Large-scale concrete solutions for commercial properties, parking
              lots, foundations, and more.
            </p>
            <span className="text-blue-600 font-semibold hover:underline">
              Learn More →
            </span>
          </Link>

          {/* Residential */}
          <Link
            to="/residential"
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer border-t-4 border-green-600"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Residential
            </h3>
            <p className="text-gray-600 mb-6">
              Quality concrete work for homes, including driveways, patios,
              walkways, and foundations.
            </p>
            <span className="text-green-600 font-semibold hover:underline">
              Learn More →
            </span>
          </Link>

          {/* Decorative */}
          <Link
            to="/decorative"
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer border-t-4 border-purple-600"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Decorative
            </h3>
            <p className="text-gray-600 mb-6">
              Stunning decorative concrete solutions including stamped concrete,
              stains, and custom designs.
            </p>
            <span className="text-purple-600 font-semibold hover:underline">
              Learn More →
            </span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today for a free consultation and quote on your concrete
          project.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
        >
          Get Your Free Quote
        </button>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
