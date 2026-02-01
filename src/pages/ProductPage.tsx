import { useState } from 'react'
import { ChevronUp, ChevronDown, Star, CheckCircle, Heart } from 'lucide-react'
import ImageCarousel from '../components/ImageCarousel'
import ProductInfo from '../components/ProductInfo'

const PRODUCT_IMAGES = [
  'https://eu.beyondalpha.co/cdn/shop/files/Group_1000003139_48f16d1e-2c25-4353-91f8-dcd7371656e4.png?v=1766088266&width=1440',
  'https://eu.beyondalpha.co/cdn/shop/files/PDP_Image_0fd898c0-b2c4-4941-bf91-97cc4108c83b.jpg?v=1766088227&width=1440',
  'https://eu.beyondalpha.co/cdn/shop/files/image_89.jpg?v=1768838839&width=1440',
  'https://eu.beyondalpha.co/cdn/shop/files/image_91_c5b1d151-85ad-4acb-802d-20cd1a8c3cf6.png?v=1769521487&width=1440',
  'https://eu.beyondalpha.co/cdn/shop/files/image_93.jpg?v=1768838839&width=1440',
  'https://eu.beyondalpha.co/cdn/shop/files/image_95.png?v=1769521487&width=1440',
  'https://eu.beyondalpha.co/cdn/shop/files/BA-Alpha_Shape_-_2.jpg?v=1766088975&width=160',
  'https://eu.beyondalpha.co/cdn/shop/files/BA-Alpha_Shape_-_11.jpg?v=1766089024&width=160',
  'https://eu.beyondalpha.co/cdn/shop/files/image_90.png?v=1768838839&width=160',
  'https://eu.beyondalpha.co/cdn/shop/files/image_94.jpg?v=1768838839&width=160',
  'https://eu.beyondalpha.co/cdn/shop/files/BA-Alpha_Shape_-_5.png?v=1766089033&width=160',
]

export default function ProductPage() {
  const [selectedJar, setSelectedJar] = useState('1-pack')
  const [purchaseType, setPurchaseType] = useState('one-time')

  return (
    <div className="max-w-7xl mx-auto px-5 py-0 bg-white">
      <div className="grid grid-cols-3 gap-10 items-start">
        {/* Left Column - Images */}
        <div className="col-span-1 sticky top-12">
          <ImageCarousel images={PRODUCT_IMAGES} />
        </div>

        {/* Right Column - Product Info */}
        <div className="col-span-2">
          <ProductInfo 
            selectedJar={selectedJar}
            setSelectedJar={setSelectedJar}
            purchaseType={purchaseType}
            setPurchaseType={setPurchaseType}
          />
        </div>
      </div>
    </div>
  )
}
