import { useState } from 'react'
import QuoteModal from '../components/QuoteModal'

export default function Decorative() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Page Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Decorative Concrete</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Add unique style and character to your property with Dingeman Concrete's
          decorative solutions. From stamped patterns to custom colors, we create
          concrete that's both beautiful and functional.
        </p>
      </section>

      {/* Services Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Stamped Concrete</h3>
            <p className="text-gray-600 mb-4">
              Create the look of natural stone, brick, or wood with durable stamped
              concrete that lasts for years.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Stained Concrete</h3>
            <p className="text-gray-600 mb-4">
              Transform plain concrete with custom color stains that add depth,
              character, and visual appeal.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Engraved Designs</h3>
            <p className="text-gray-600 mb-4">
              Custom engraved patterns and logos etched into concrete for a truly
              unique, personalized look.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Epoxy Coatings</h3>
            <p className="text-gray-600 mb-4">
              Glossy, durable epoxy finishes that protect concrete while adding
              stunning visual effects and shine.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Polished Concrete</h3>
            <p className="text-gray-600 mb-4">
              Sophisticated polished finishes that reveal the natural beauty of
              concrete with a professional appearance.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Exposed Aggregate</h3>
            <p className="text-gray-600 mb-4">
              Stunning textured surfaces created by exposing decorative stones and
              aggregate within the concrete.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-600 rounded-lg p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Create Something Beautiful
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let our decorative concrete experts transform your vision into reality.
          Get a free consultation and design mockup!
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
        >
          Request a Quote
        </button>
      </section>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
