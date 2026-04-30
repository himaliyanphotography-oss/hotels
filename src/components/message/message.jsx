"use client";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { useToast } from "../../components/ui/use-toast";
import { Phone, MapPin, X } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [mobileNumber, setMobileNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [showDirections, setShowDirections] = useState(false);
  const [loading, setLoading] = useState(false);

 const onSubmit = async () => {
  if (!mobileNumber || !name || !email || !description) {
    toast({
      description: "Please fill in all fields",
      variant: "destructive",
    });
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobileNumber,
        description,
      }),
    });

    const data = await res.json();

    if (data.success) {
      toast({
        description: "Message sent successfully ✅",
      });

      setName("");
      setEmail("");
      setMobileNumber("");
      setDescription("");
    } else {
      throw new Error();
    }
  } catch (error) {
    toast({
      description: "Failed to send message ❌",
      variant: "destructive",
    });
  } finally {
    setLoading(false);
  }
};

  const openDirections = () => {
    setShowDirections(true);
  };

  const closeDirections = () => {
    setShowDirections(false);
  };

  return (
    <>
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-pink-300 via-yellow-300 to-green-300 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Form Section */}
            <div className="bg-black p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="space-y-4">
                  <Input
                    type="text"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Your Name"
                    className="w-full h-12 bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-white"
                  />
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full h-12 bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-white"
                  />
                  <Input
                    type="text"
                    required
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="Phone Number"
                    className="w-full h-12 bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-white"
                  />
                  <Textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Your Message"
                    className="w-full min-h-[150px] bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-white"
                  />
                </div>
       <button
  type="button"
  disabled={loading}
  className="w-full text-xl flex items-center justify-center gap-2 text-white bg-green-600 hover:bg-green-700 transition-colors p-3 rounded-lg font-medium disabled:opacity-50"
  onClick={onSubmit}
>
  {loading ? "Sending..." : "Send Message"}
</button>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-black p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Our Location
              </h3>
              <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg relative">
                <iframe
                    src="https://www.google.com/maps?q=Spellmount+Resort+Kausani&output=embed"
                  className="w-full h-full absolute inset-0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Way to Hotel Button */}
              <div className="mt-4">
                <button
                  onClick={openDirections}
                  className="w-full text-lg flex items-center justify-center gap-2 text-white  bg-green-600 hover:bg-green-700 transition-colors p-3 rounded-lg font-medium"
                >
                  <MapPin size={18} />
                  Way to Hotel
                </button>
              </div>

              {/* Contact Details */}
              <div className="mt-6 space-y-4 text-white">
                <p className="grid grid-cols-[1fr_3fr] items-start ">
                  <span className="text-left font-semibold">Address:</span>
                  
                  <span>
                    <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0"
                >
                    Spellmount Resort ,
                    Kausani, Uttarakhand 
                      </a>
                  </span>
                </p>
                <p className="grid grid-cols-[1fr_3fr] items-start">
                  <span className="text-left  font-semibold">
                    Reception
                    <br /> & Frontdesk:
                  </span>
                  <span>
                    +918279677141, +918279677141,
                    <br /> +918279677141
                  </span>
                </p>
                <p className="grid grid-cols-[1fr_3fr] items-start">
                  <span className="text-left  font-semibold">Email:</span>
                  <a href="mailto:spellmountresort@gmail.com">

                  <span>spellmountresort@gmail.com</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Modal */}
  {showDirections && (
  <div className="mt-10 fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-3 sm:p-6">
    
    <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[70vh] overflow-y-auto relative shadow-2xl">

      {/* Close Button */}
      <button
        onClick={closeDirections}
        className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black text-white rounded-full p-2"
      >
        <X size={22} />
      </button>

      {/* Header */}
      <div className="bg-green-600 text-white p-5 sm:p-6 text-center">
        <h3 className="text-xl sm:text-2xl font-bold">
          Way to Spellmount Resort
        </h3>
        <p className="mt-1 text-sm sm:text-base opacity-90">
          Follow these directions to reach the resort in Kausani
        </p>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-8">

        {/* Google Map */}
   

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Step 1 */}
          <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden">
            <div className="h-56 sm:h-72">
              <img
                src="/kausani.jpg"
                alt="Road to Kausani"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-semibold text-lg mb-2 text-black">
                Step 1: Reach Kausani Main Market
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Travel via Almora or Bageshwar road and reach Kausani town.
                From the main market, head towards the hotel/resort area.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden">
            <div className="h-56 sm:h-72">
              <img
                src="/road.jpg"
                alt="Road to Resort"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-semibold text-lg mb-2 text-black">
                Step 2: Follow Resort Road
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                From the main road, follow the signs toward Spellmount Resort.
                The resort is located in a peaceful hill area with scenic views.
              </p>
            </div>
          </div>

        </div>

        {/* Extra Tip */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-gray-700">
          💡 Tip: Roads are hilly — prefer daytime travel for a safer and scenic journey.
        </div>

      </div>
    </div>
  </div>
)}
    </>
  );
}