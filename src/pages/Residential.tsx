import { useState } from "react";
import QuoteModal from "../components/QuoteModal";

export default function Residential() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Page Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Residential Services
        </h1>
        <p className="bg-white rounded-lg shadow-lg p-8 text-xl text-gray-600 max-w-3xl">
          Transform your home with professional concrete solutions from Dingeman
          Concrete Inc. We specialize in creating beautiful, durable outdoor
          spaces for families to enjoy.
        </p>
      </section>

      {/* Services Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Driveways</h3>
            <p className="text-gray-600 mb-4">
              Beautiful and durable driveways that enhance your home's curb
              appeal and withstand years of use and weather.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Patios</h3>
            <p className="text-gray-600 mb-4">
              Create the perfect outdoor entertaining space with a custom
              concrete patio designed for your lifestyle.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Sidewalks & Walkways
            </h3>
            <p className="text-gray-600 mb-4">
              Safe, level concrete walkways that improve accessibility and add
              charm to your property.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Foundations
            </h3>
            <p className="text-gray-600 mb-4">
              Strong, reliable foundations for homes and additions built to last
              generations.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Pool Decks
            </h3>
            <p className="text-gray-600 mb-4">
              Safe and stylish pool decks that provide comfortable,
              slip-resistant surfaces for your family.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Steps & Ramps
            </h3>
            <p className="text-gray-600 mb-4">
              Custom concrete steps and accessibility ramps built to code and
              tailored to your home's architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 rounded-lg p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Home?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let us help you create beautiful concrete solutions for your
          residential property. Contact us for a free consultation!
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
        >
          Request a Quote
        </button>
      </section>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
