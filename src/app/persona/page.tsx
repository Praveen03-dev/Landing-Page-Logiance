import Link from "next/link"
import Image from "next/image"
import { Diamond } from "lucide-react"

export default function PersonaPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Built for sellers like you</h1>
          <p className="text-xl text-gray-600">
            From bedroom brands to big ops, if you're shipping ... you're one of us.
          </p>
        </div>

        {/* Persona Selection */}
        <div className="mb-16">
          <h2 className="text-xl text-gray-700 mb-6">Pick what sounds like you</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {/* D2C Brand - Selected */}
            <div className="bg-[#F8FAFC] border-2 border-blue-600 rounded-xl p-6 relative">
              <h3 className="text-lg font-semibold mb-2">
                <span className="bg-gradient-to-r from-[#2A35A4] via-[#3E49B8] to-[#407FFF] text-transparent bg-clip-text">I run a D2C brand</span>
              </h3>
              <p className="text-sm text-gray-600 mb-8">
                Orders flying in from your website? We'll help you deliver fast and look pro while doing it.
              </p>
              <div className="absolute bottom-4 right-4">
                <Image src="/shipping-box-icon.png" alt="D2C icon" width={50} height={50} className="opacity-80" />
              </div>
            </div>

            {/* Instagram & WhatsApp */}
            <div className="bg-[#F8FAFC] border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">I sell on Insta & WhatsApp</h3>
              <p className="text-sm text-gray-600">
                DMs, payment links, and now deliveries that actually show up. All without lifting a finger.
              </p>
            </div>

            {/* Shop */}
            <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">I sell from my shop</h3>
              <p className="text-sm text-gray-600">
                Take your storefront national. Schedule pickups, track deliveries, and offer COD... without hiring a
                team.
              </p>
            </div>

            {/* Everywhere */}
            <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">I sell everywhere</h3>
              <p className="text-sm text-gray-600">
                Flipkart, Insta, Offline popups, Shopify. Wherever your buyers are — we keep it stitched together.
              </p>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="relative bg-[#F1F5F9] rounded-xl p-8 lg:p-12 mb-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Selling online? We'll help you ship like a pro.
            </h2>
            <div className="border-l-4 border-blue-600 pl-4 mb-8">
              <p className="text-lg text-gray-700 mb-2">Orders are growing, but shipping is still messy?</p>
              <p className="text-gray-600">
                We simplify everything ... from pickups to tracking to returns, so you can focus on your brand.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Diamond className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Too many things to manage?</h3>
                  <p className="text-gray-600">
                    We <span className="bg-gradient-to-r from-[#2A35A4] via-[#3E49B8] to-[#407FFF] text-transparent bg-clip-text font-medium">auto-handle</span> pickups, updates, and delays ...
                    so your team isn't stuck doing everything.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Diamond className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Brand missing in delivery updates?</h3>
                  <p className="text-gray-600">
                    Give your customers a clean, <span className="bg-gradient-to-r from-[#2A35A4] via-[#3E49B8] to-[#407FFF] text-transparent bg-clip-text font-medium">branded experience</span>{" "}
                    ... with your logo, your tone, your touch.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Diamond className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Returns feel like a headache?</h3>
                  <p className="text-gray-600">
                    Let customers <span className="bg-gradient-to-r from-[#2A35A4] via-[#3E49B8] to-[#407FFF] text-transparent bg-clip-text font-medium">raise return requests</span> themselves.
                    You stay in charge ... no endless follow-ups.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#2A35A4] via-[#3E49B8] to-[#407FFF] text-white py-3 px-6 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                See how it works for D2C
              </Link>
            </div>
          </div>

          {/* Decorative curved lines */}
          <div className="hidden lg:block absolute top-1/4 right-12 w-32 h-32">
            <svg viewBox="0 0 100 100" className="text-blue-200">
              <path
                d="M 0,50 C 30,80 70,80 100,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </svg>
          </div>
          <div className="hidden lg:block absolute bottom-1/4 right-12 w-32 h-32">
            <svg viewBox="0 0 100 100" className="text-blue-200">
              <path
                d="M 0,50 C 30,20 70,20 100,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </svg>
          </div>
        </div>


      </div>
    </div>
  )
}