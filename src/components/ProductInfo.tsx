import { useState } from 'react'
import { Star, Check, Truck, Clock, Shield } from 'lucide-react'

interface ProductInfoProps {
  selectedJar: string
  setSelectedJar: (jar: string) => void
  purchaseType: string
  setPurchaseType: (type: string) => void
}

export default function ProductInfo({
  selectedJar,
  setSelectedJar,
  purchaseType,
  setPurchaseType,
}: ProductInfoProps) {
  const [openDetails, setOpenDetails] = useState<string | null>(null)

  const jarOptions = [
    { id: '1-pack', label: '1 Pack', price: '835 zł', oneTimePrice: '899 zł', image: 'https://eu.beyondalpha.co/cdn/shop/files/dbs-alpha-shape1.avif?v=1767834081&width=150' },
    { id: '2-packs', label: '2 Packs', price: '770 zł', oneTimePrice: '835 zł', image: 'https://eu.beyondalpha.co/cdn/shop/files/dbs-alpha-shape2.avif?v=1767834094&width=150' },
    { id: '3-packs', label: '3 Packs', price: '706 zł', oneTimePrice: '770 zł', image: 'https://eu.beyondalpha.co/cdn/shop/files/dbs-alpha-shape3.avif?v=1767834106&width=150' },
  ]

  const currentJar = jarOptions.find(j => j.id === selectedJar) || jarOptions[0]

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="font-poppins text-4xl font-medium leading-tight">
          The Dream Body Stack™
        </h1>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-sm font-medium">4.8 • 1,070 Reviews</span>
      </div>

      {/* Features */}
      <div className="space-y-3">
        <h3 className="font-poppins text-lg font-medium">Product Features</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-blue-500">•</span> Helps improve T-levels for explosive energy and drive</li>
          <li className="flex gap-2"><span className="text-blue-500">•</span> Flushes out 'feminizing' estrogen from the body</li>
          <li className="flex gap-2"><span className="text-blue-500">•</span> Dissolves stubborn belly fat, love handles, and "moobs"</li>
          <li className="flex gap-2"><span className="text-blue-500">•</span> Blocks new fat cells from forming while preserving muscle</li>
          <li className="flex gap-2"><span className="text-blue-500">•</span> Boosts cognitive function and mental performance</li>
          <li className="flex gap-2"><span className="text-blue-500">•</span> Contains 30 clinical-grade natural ingredients</li>
          <li className="flex gap-2"><span className="text-blue-500">•</span> Triple-tested for maximum purity and potency</li>
        </ul>
      </div>

      {/* Purchase Options */}
      <div className="space-y-4 pt-4 border-t">
        <div>
          <h3 className="font-inter text-lg font-medium mb-3">Buying Options:</h3>
          <div className="grid grid-cols-2 gap-3">
            <label className={`flex items-center gap-3 p-4 rounded-lg border-4 cursor-pointer transition ${
              purchaseType === 'one-time' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}>
              <input
                type="radio"
                name="purchase"
                value="one-time"
                checked={purchaseType === 'one-time'}
                onChange={(e) => setPurchaseType(e.target.value)}
                className="w-4 h-4"
              />
              <div>
                <div className="font-bold text-sm">One Time Purchase</div>
                <div className="text-lg font-bold">
                  <span className="line-through text-gray-500">899 zł</span>
                  <span className="ml-2">835 zł</span>
                </div>
              </div>
            </label>

            <label className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition ${
              purchaseType === 'subscribe' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}>
              <input
                type="radio"
                name="purchase"
                value="subscribe"
                checked={purchaseType === 'subscribe'}
                onChange={(e) => setPurchaseType(e.target.value)}
                className="w-4 h-4"
              />
              <div>
                <div className="font-bold text-sm">Subscribe and Save 15%</div>
                <div className="text-lg font-bold">
                  <span className="line-through text-gray-500">764,15 zł</span>
                  <span className="ml-2">709,75 zł</span>
                </div>
              </div>
            </label>
          </div>

          {purchaseType === 'subscribe' && (
            <div className="mt-3 flex gap-2 text-sm text-gray-600 justify-end">
              <span>Pause or Cancel at Anytime!</span>
              <span className="font-bold text-lg">?</span>
            </div>
          )}
        </div>

        {/* Jar Selection */}
        <div className="space-y-3">
          <h3 className="font-inter text-base font-medium">Jars:</h3>
          <div className="grid grid-cols-3 gap-3">
            {jarOptions.map((jar) => (
              <button
                key={jar.id}
                onClick={() => setSelectedJar(jar.id)}
                className={`flex flex-col items-center gap-2 p-4 rounded-lg border-4 transition ${
                  selectedJar === jar.id ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                }`}
              >
                <img src={jar.image} alt={jar.label} className="h-16 object-contain" />
                <div className="text-center">
                  <div className="font-bold text-sm">{jar.label}</div>
                  <div className="font-bold text-sm">
                    {purchaseType === 'one-time' ? jar.oneTimePrice : jar.price} Each
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Delivery Frequency */}
        {purchaseType === 'subscribe' && (
          <div className="space-y-3">
            <h3 className="font-inter text-base font-medium">Delivered every:</h3>
            <div className="grid grid-cols-3 gap-3">
              {['24 days', '48 days', '72 days'].map((freq) => (
                <button key={freq} className="p-3 rounded-lg border-4 border-blue-500 bg-blue-50 font-bold text-sm">
                  {freq}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Shipping Info */}
        <div className="text-center text-lg font-dm_sans font-medium">
          Free shipping (Over 441 zł)
        </div>
      </div>

      {/* Add to Cart Button */}
      <button className="w-full bg-red-500 hover:bg-red-600 text-white font-oswald text-3xl font-medium py-4 px-6 rounded-xl shadow-lg transition">
        ADD TO CART
      </button>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-4 pt-6 border-t">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <Truck className="w-6 h-6" />
          </div>
          <div className="text-center text-xs font-medium">Free shipping on orders 441 zł+</div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <div className="text-center text-xs font-medium">Fast 2-4 Day Delivery</div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <Shield className="w-6 h-6" />
          </div>
          <div className="text-center text-xs font-medium">60-Day Money-Back Guarantee</div>
        </div>
      </div>

      {/* Original Badge */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <p className="text-xs text-gray-600 text-center">
          Original <strong>The Dream Body Stack™</strong> is made by <strong>Beyond Alpha</strong> and available only at{' '}
          <a href="https://beyondalpha.co/" target="_blank" rel="noopener noreferrer" className="underline">
            beyondalpha.co
          </a>
        </p>
      </div>

      {/* Testimonial */}
      <div className="bg-gray-200 rounded-2xl p-5 space-y-4">
        <div className="flex flex-wrap gap-3 justify-center">
          <div className="w-32">
            <img
              src="https://cdn.shopify.com/s/files/1/0888/9293/2371/files/Stars_1_copy_2.png?v=1728367368"
              alt="Star rating"
              className="w-full"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <img
              src="https://cdn.shopify.com/s/files/1/0888/9293/2371/files/Vector.svg?v=1728383861"
              alt="Verified"
              className="w-6 h-6"
            />
            <span className="text-sm border border-green-400 rounded-full px-3.5 py-1">Verified Buyer</span>
          </div>
        </div>
        
        <div className="text-center space-y-1">
          <p className="font-bold text-gray-900">I'm like a NEW man</p>
          <p className="text-sm text-gray-700">
            I wish I'd found this stack years ago. Lost 24 pounds, built muscle, lost moobs, and got my drive back all at the same time.
          </p>
          <p className="font-bold text-xs">- Derek L.</p>
        </div>
      </div>
    </div>
  )
}
