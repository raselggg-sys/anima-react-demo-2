import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

interface ImageCarouselProps {
  images: string[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showThumbnails, setShowThumbnails] = useState(true)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-5">
      {/* Main Image */}
      <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-square">
        <img
          src={images[currentIndex]}
          alt={`Product ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        
        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/30 backdrop-blur hover:bg-white/50 rounded-full flex items-center justify-center transition disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentIndex === 0}
        >
          <ChevronUp className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={nextImage}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/50 backdrop-blur hover:bg-white/70 rounded-full flex items-center justify-center transition"
        >
          <ChevronDown className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-3 max-h-80 overflow-y-auto">
        {images.slice(0, 10).map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`aspect-square rounded-xl overflow-hidden bg-gray-100 border-2 transition ${
              idx === currentIndex ? 'border-blue-500' : 'border-gray-200'
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Review Section */}
      <div className="bg-gray-200 rounded-2xl p-5 space-y-4">
        <div className="flex flex-wrap gap-3 justify-center">
          <div className="w-32">
            <img
              src="https://cdn.shopify.com/s/files/1/0888/9293/2371/files/star-rating.svg?v=1729672257"
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
