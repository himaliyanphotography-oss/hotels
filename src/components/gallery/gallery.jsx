"use client"
import { useState, useMemo, useEffect, useCallback } from "react"
import { Card } from "../ui/card"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "../ui/dialog"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeSubCategory, setActiveSubCategory] = useState("rooms")
  const [isClient, setIsClient] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState({})
  const [currentIndex, setCurrentIndex] = useState(null)
  const [expandedCategory, setExpandedCategory] = useState(null)

  // Ensure hydration consistency
  useEffect(() => {
    setIsClient(true)
  }, [])

  const images = [
    // Rooms
    {
      url: "/r1.JPG",
      title: "Common Area",
      // description: "Experience luxury with our deluxe rooms.",
      category: "rooms",
      subcategory: "commanarea",
    },
    {
      url: "/Deluxe Room with balcony.JPG",
      title: "Deluxe Room with Balcony",
      // description: "Experience luxury with our deluxe rooms.",
      category: "rooms",
      subcategory: "deluxrwb",
    },
    {
      url: "/db1.JPG",
      title: "Deluxe Room with Balcony",
      // description: "Experience luxury with our deluxe rooms.",
      category: "rooms",
      subcategory: "deluxrwb",
    },
    {
      url: "/DELUXE ROOM WITHOUT AC.JPG",
      title: "Deluxe Room (Non-AC)",
      // description: "Experience luxury with our deluxe rooms.",
      category: "rooms",
      subcategory: "deluxwoac",
    },
    {
      url: "/dwb1.JPG",
      title: "Deluxe Room without Balcony",
      // description:
      //   "Providing you and your family with an unforgettable stay filled with comfort and luxury.",
      category: "rooms",
      subcategory: "deluxwob",
    },
    {
      url: "/dwb2.JPG",
      title: "Deluxe Room without Balcony",
      // description:
      //   "Providing you and your family with an unforgettable stay filled with comfort and luxury.",
      category: "rooms",
      subcategory: "deluxwob",
    },
    {
      url: "/es1.JPG",
      title: "Executive Suite with Balcony",
      // description:
      //   "Step into the tranquility of our Executive Room, where luxury meets serenity.",
      category: "rooms",
      subcategory: "executivewb",
    },
    {
      url: "/es2.JPG",
      title: "Executive Suite with Balcony",
      // description:
      //   "Step into the tranquility of our Executive Room, where luxury meets serenity.",
      category: "rooms",
      subcategory: "executivewb",
    },
    {
      url: "/Executive room with balcony.JPG",
      title: "Executive Suite with Balcony",
      // description:
      //   "Step into the tranquility of our Executive Room, where luxury meets serenity.",
      category: "rooms",
      subcategory: "executivewb",
    },
    {
      url: "/fb3b2.JPG",
      title: "Family Suite (3B) ",
      // description:
      //   "Providing you and your family with an unforgettable stay filled with comfort and luxury.",
      category: "rooms",
      subcategory: "family3b",
    },
    {
      url: "/family room 3B.JPG",
      title: "Family Suite (3B) ",
      // description:
      //   "Providing you and your family with an unforgettable stay filled with comfort and luxury.",
      category: "rooms",
      subcategory: "family3b",
    },
    {
      url: "/fb2.JPG",
      title: "Family Suite (4B) ",
      // description:
      //   "Indulge in sophistication and comfort in our Family Suite Room.",
      category: "rooms",
      subcategory: "family4b",
    },
    {
      url: "/family suite 4B.JPG",
      title: "Family Suite (4B) ",
      // description:
      //   "Indulge in sophistication and comfort in our Family Suite Room.",
      category: "rooms",
      subcategory: "family4b",
    },
    {
      url: "/zr1.JPG",
      title: "Zen Room with Balcony",
      // description:
      //   "Providing you and your family with an unforgettable stay filled with comfort and luxury.",
      category: "rooms",
      subcategory: "zen",
    },
    {
      url: "/ZEN ROOM WITH BALCONY.JPG",
      title: "Zen Room with Balcony",
      // description:
      //   "Providing you and your family with an unforgettable stay filled with comfort and luxury.",
      category: "rooms",
      subcategory: "zen",
    },
    // Frontdesk
    {
      url: "/4fd.JPG",
      title: "Main Reception",
      // description: "Our welcoming front desk team is ready to assist you",
      category: "frontdesk",
    },
    {
      url: "/1fd.JPG",
      title: "Main Reception",
      // description: "Our welcoming front desk team is ready to assist you",
      category: "frontdesk",
    },
    {
      url: "/2fd.JPG",
      title: "Main Reception",
      // description: "Our welcoming front desk team is ready to assist you",
      category: "frontdesk",
    },
    {
      url: "/3fd.JPG",
      title: "Main Reception",
      // description: "Our welcoming front desk team is ready to assist you",
      category: "frontdesk",
    },

    // Entrance  
  
    // Dining
    {
      url: "/8d.jpg",
      title: "Restaurant",
      // description: "Fine dining with multiple delicious cuisines",
      category: "dining",
    },
    {
      url: "/1d.JPG",
      title: "Restaurant",
      // description: "Fine dining with multiple delicious cuisines",
      category: "dining",
    },

    // Activities
    {
      url: "/7y.jpg",
      title: "Sunrise Yoga Deck",
      // description: "Start your day with peaceful meditation",
      category: "activities",
    },
    {
      url: "/8y.jpg",
      title: "Sunrise Yoga Deck",
      // description: "Start your day with peaceful meditation",
      category: "activities",
    },
    // {
    //   url: "/1y.JPG",
    //   // title: "Sunrise Yoga Deck",
    //   // description: "Start your day with peaceful meditation",
    //   category: "activities",
    // },
    {
      url: "/2a.JPG",
      title: "Sunrise Yoga Deck",
      // description: "Start your day with peaceful meditation",
      category: "activities",
    },
    {
      url: "/3a.JPG",
      title: "Sunrise Yoga Deck",
      // description: "Start your day with peaceful meditation",
      category: "activities",
    },
    
  ]
  const categories = [
    { id: "all", label: "All" },
    {
      id: "rooms",
      label: "Rooms",
      subCategories: [
        { id2: "deluxrwb", label: "Deluxe Room with Balcony" },
        // { id2: "commanarea", label: "Comman Area" },
        { id2: "deluxwob", label: "Deluxe Room without Balcony" },
        { id2: "deluxwoac", label: "Deluxe Room (Non-AC)" },
        { id2: "executivewb", label: "Executive Suite with Balcony" },
        { id2: "family3b", label: "Family Suite (3B) " },
        { id2: "family4b", label: "Family Suite (4B) " },
        { id2: "zen", label: "Zen Room with Balcony" },
      ],
    },
    { id: "frontdesk", label: "Front Desk" },
    { id: "entrance", label: "Entrance" },
    { id: "dining", label: "Dining" },
    { id: "activities", label: "Activities" },
    { id: "parking", label: "Parking Area" },
  ]

  // Handle category click to toggle expansion and set active category
  const handleCategoryClick = (categoryId) => {
    // Set this as the active category
    setActiveCategory(categoryId)

    // Reset active subcategory when changing categories
    setActiveSubCategory(null)

    // Toggle expanded state
    if (expandedCategory === categoryId) {
      setExpandedCategory(null)
    } else {
      setExpandedCategory(categoryId)
    }
  }

  // Memoized Filtered Images - Only run client-side
  const filteredImages = useMemo(() => {
    // During SSR or initial hydration, return basic filtered results
    if (!isClient) {
      return activeCategory === "all" ? images : images.filter((image) => image.category === activeCategory)
    }

    // After hydration, apply filtering
    if (activeCategory === "all") {
      return [...images]
    }

    // When a category is selected but no subcategory
    if (!activeSubCategory) {
      return images.filter((image) => image.category === activeCategory)
    }

    // When both category and subcategory are selected
    return images.filter((image) => {
      if (image.category === activeCategory) {
        if (activeCategory === "rooms" && activeSubCategory) {
          return image.subcategory === activeSubCategory
        }
        return true
      }
      return false
    })
  }, [activeCategory, activeSubCategory, isClient, images])

  // Track image loading state
  const handleImageLoad = useCallback((index) => {
    setImagesLoaded((prev) => ({ ...prev, [index]: true }))
  }, [])

  // If not client yet, render a simplified version to avoid hydration mismatch
  if (!isClient) {
    return (
      <section className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-[#267613] to-white bg-clip-text text-transparent">
                Experience Spellmount Resort
              </span>
            </h2>
            <p className="mt-3 sm:mt-4 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Discover serenity in every corner
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-[#267613] to-white bg-clip-text text-transparent">
              Experience Spellmount Resort
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Discover serenity in every corner
          </p>
        </div>

        {/* Main layout: Categories top on mobile, side on desktop */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Categories - responsive positioning */}
          <div className="order-1 lg:order-1 lg:w-1/5">
            <div className="flex flex-wrap lg:flex-col justify-center gap-2 mb-6 lg:mb-0">
              {categories.map((category) => (
                <div key={category.id} className="w-full sm:w-auto lg:w-full">
                  <motion.button
                    onClick={() => handleCategoryClick(category.id)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 w-full ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-gray-500 to-[#267613] text-white shadow-lg shadow-white/25"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category.label}
                  </motion.button>

                  {/* Show subcategories only when this category is expanded */}
                  {expandedCategory === category.id && category.subCategories && (
                    <div className="mt-2 flex flex-wrap lg:flex-col gap-1 sm:gap-2">
                      {category.subCategories.map((subCategory) => (
                        <motion.button
                          key={subCategory.id2}
                          onClick={() => {
                            setActiveCategory(category.id)
                            setActiveSubCategory(subCategory.id2)
                          }}
                          className={`px-3 sm:px-4 py-1 sm:py-2 rounded-md text-xs text-left font-medium transition-all duration-300 ${
                            activeSubCategory === subCategory.id2
                              ? "bg-gradient-to-r from-gray-500 to-[#267613] text-white shadow-lg shadow-white/25"
                              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="block truncate">{subCategory.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Images - improved responsive grid */}
          <div className="flex-1 order-2 lg:order-2">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${activeCategory}-${activeSubCategory}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                  {filteredImages.map((image, index) => (
                    <motion.div
                      key={`${image.url}-${activeCategory}-${activeSubCategory}`}
                      className="aspect-[4/3] sm:aspect-[18/12]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Card
                        className="relative group cursor-pointer overflow-hidden bg-gradient-to-br from-[#267613]/10 to-gray-900/50 h-full border border-[#267613]/30 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        onClick={() => {
                          setSelectedImage(image)
                          setCurrentIndex(index)
                        }}
                      >
                        <div
                          className="absolute inset-0 bg-gray-800 animate-pulse"
                          style={{
                            display: imagesLoaded[index] ? "none" : "block",
                          }}
                        />

                        <Image
                          src={image.url || "/placeholder.svg"}
                          alt={image?.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          priority={index < 3}
                          loading={index < 3 ? "eager" : "lazy"}
                          onLoad={() => handleImageLoad(index)}
                        />

                        <div className="absolute text-center inset-0 flex flex-col justify-end p-3 sm:p-4 text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                          <h3 className="text-sm sm:text-lg font-bold text-balance">{image.title}</h3>
                          <p className="text-sm sm:text-lg font-bold text-balance">{image?.description}</p>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            {filteredImages.length === 0 && (
              <div className="text-center text-gray-400 py-16">
                <p>No images found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal - Enhanced for better responsiveness */}
      <AnimatePresence>
        {isClient && selectedImage && (
          <Dialog
            open={!!selectedImage}
            onOpenChange={(open) => {
              if (!open) {
                setSelectedImage(null)
                setCurrentIndex(null)
              }
            }}
          >
            <DialogContent className="max-w-7xl w-[95vw] sm:w-[90vw] p-0 bg-transparent border-none [&>button]:hidden mt-10">
              <motion.div
                className="relative bg-black/95 rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white z-20 bg-black/60 hover:bg-black/80 p-2 sm:p-3 rounded-full transition-all duration-200 shadow-lg border border-white/20"
                  onClick={() => {
                    setSelectedImage(null)
                    setCurrentIndex(null)
                  }}
                  aria-label="Close image"
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </button>

                {currentIndex > 0 && (
                  <button
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white bg-black/60 hover:bg-black/80 p-2 sm:p-3 rounded-full z-20 transition-all duration-200 shadow-lg border border-white/20"
                    onClick={() => {
                      const newIndex = currentIndex - 1
                      setCurrentIndex(newIndex)
                      setSelectedImage(filteredImages[newIndex])
                    }}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                  </button>
                )}

                {currentIndex < filteredImages.length - 1 && (
                  <button
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white bg-black/60 hover:bg-black/80 p-2 sm:p-3 rounded-full z-20 transition-all duration-200 shadow-lg border border-white/20"
                    onClick={() => {
                      const newIndex = currentIndex + 1
                      setCurrentIndex(newIndex)
                      setSelectedImage(filteredImages[newIndex])
                    }}
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                  </button>
                )}

                <div className="p-4 sm:p-6 text-center">
                  <DialogTitle className="text-lg sm:text-2xl font-bold text-white mb-2 text-balance">
                    {selectedImage?.title}
                  </DialogTitle>
                  {selectedImage?.description && (
                    <DialogDescription className="text-gray-300 text-sm sm:text-base">
                      {selectedImage?.description}
                    </DialogDescription>
                  )}
                </div>

                <div className="w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] relative">
                  <Image
                    src={selectedImage?.url || "/placeholder.svg"}
                    alt={selectedImage?.title}
                    fill
                    priority
                    className="object-contain"
                  />
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {currentIndex + 1} / {filteredImages.length}
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  )
}
