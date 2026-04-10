import { useState } from 'react'
import QuoteModal from '../components/QuoteModal'

export default function Commercial() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Page Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Commercial Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Dingeman Concrete Inc. is your trusted partner for large-scale commercial
          concrete projects. We deliver professional-grade solutions that meet the
          highest industry standards.
        </p>
      </section>

      {/* Services Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Parking Lots</h3>
            <p className="text-gray-600 mb-4">
              Professional parking lot construction and repairs, including proper
              drainage systems and durable finishes.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Foundations</h3>
            <p className="text-gray-600 mb-4">
              Strong and reliable concrete foundations for commercial buildings and
              structures that stand the test of time.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Sidewalks & Walkways</h3>
            <p className="text-gray-600 mb-4">
              Safe, accessible concrete sidewalks and walkways designed for heavy foot
              traffic and weather resistance.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Industrial Slabs</h3>
            <p className="text-gray-600 mb-4">
              Heavy-duty concrete slabs for warehouses, factories, and industrial
              facilities engineered for durability.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Demolition & Removal</h3>
            <p className="text-gray-600 mb-4">
              Professional concrete demolition and removal services prepared for your
              next construction phase.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Custom Solutions</h3>
            <p className="text-gray-600 mb-4">
              Specialized concrete work tailored to your unique commercial needs and
              project specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 rounded-lg p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Commercial Concrete Work?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get a free quote from our experienced team. We're ready to take on projects
          of any size.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
        >
          Request a Quote
        </button>
      </section>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
