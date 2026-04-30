import React from "react";

const policySections = [
  {
    title: "1. Booking & Payment",
    items: [
      {
        subtitle: "Payment Rules",
        list: [
          "Stays of 1 month or more: 100% payment is required at the time of booking",
          "Shorter stays: Payment for the first night is required at the time of booking.",
        ],
        note: "Credit Card Policy: Payments via credit card incur an additional 2% surcharge.",
      },

      {
      subtitle: "Booking Rules",
        list: [
          "In case of a postponed bookings, any advance payment made by the customer will remain valid for a maximum period of 3 months from the original booking date.",
          "The booking must be rescheduled and utilzed within this period.",
        ],
        // note: "Credit Card Policy: Payments via credit card incur an additional 2% surcharge.",
      },
      {
        subtitle: "Cancellation Rules",
        list: [
          "Cancellations 3 days or more before check-in: Full refund.",
          "Cancellations 2 days before check-in: 50% of the total cost charged.",
          "Cancellations 1 day before check-in or no-show: No refund.",
          "Refunds amount will be credited within 30 days",
        ],
      },
    ],
  },
  {
    title: "2. Check-in & Check-out",
    items: [
      {
        subtitle: "Check-in",
        list: [
          "Check-in time: 1:00 PM.",
          "Early check-in is subject to availability & extra charges.",
        ],
      },
      {
        subtitle: "Check-out",
        list: [
          "Check-out time: 11:00 AM.",
          "Late check-out is subject to availability and will incur the following charges:",
          [
            "Up to 1 hour after the scheduled check-out time: ₹500",
            "Up to 2 hours after the scheduled check-out time: ₹1,000",
            "Beyond 2 hours: 50% of the applicable room rate (half-day charge).",
          ],
        ],
      },
    ],
  },
  {
    title: "3. Luggage Storage",
    list: [
      "The Hotel offers luggage storage for customers arriving early or departing late, subject to availability.",
      "Customers are responsible for their belongings, and the Hotel is not liable for any loss or damage.",
    ],
  },
  {
    title: "4. Identification Requirements",
    list: [
      "All customers staying in the room must present a valid photo ID (e.g., passport, driver's license) at check-in.",
      "Visitors must show ID at the front desk and are only allowed in the dining area and the reception area. They are not permitted to enter guest rooms and must leave by 9:00 PM. The Hotel may retain copies of IDs for security purposes, as permitted by law. ID copies are stored briefly and destroyed securely.",
      
    ],
  },
  {
    title: "5. Room Keys",
    list: [
      "Customers must deposit room keys at the front desk when leaving the Hotel and collect them upon return.",
      "Lost keys incur a replacement fee of Rs. 5,000.",
      "Customers must report lost keys to the front desk immediately.",
      "Giving room keys to third parties is strictly prohibited.",
    ],
  },
  {
    title: "6. Guest Conduct",
    list: [
      "Noise Restrictions: Loud activities disturbing others are prohibited.",
      "Smoking/Alcohol/Illegal substances prohibited indoors. Smoking allowed only in designated areas.",
      "Guests must not litter in rooms or public areas.",
      "Pets require prior approval. Unapproved pets may result in removal without refund.",
      "Disrespectful or aggressive behavior may result in eviction without refund.",
      "Guests are liable for damage to Hotel property.",
      "Theft or accusations will be investigated; Hotel may involve police if necessary.",
      "Recording devices (phones, cameras, drones) must not disturb other guests.",
      "Dangerous objects/materials are strictly prohibited inside premises.",
    ],
  },
  {
    title: "7. Amenities",
    list: [
      "Two complimentary water bottles provided per room at check-in (extra bottles chargeable).",
      "In-Room Amenities include: Air conditioning, TV, toiletries, tea/coffee kettle (in some rooms), hair dryer & iron (on request).",
      "Misuse of kettle may result in a ₹1,500 charge.",
      "Complimentary high-speed Wi-Fi available throughout the hotel.",
    ],
  },
  {
    title: "8. Restaurant & Dining",
    list: [
      "Breakfast: 8:00 AM – 10:00 AM.",
      "Extra breakfast: ₹250 per person.",
      "Restaurant service starts from 8:00 AM.",
      "Last dining order: 9:00 PM.",
    ],
  },
  {
    title: "9. Billing",
    list: [
      "All dues must be settled (room, taxes, extras) before departure.",
      "Billing disputes must be reported at check-out.",
      "Discounts apply only if officially announced.",
    ],
  },
  {
    title: "10. Privacy",
    list: [
      "Guest details are collected securely for booking & legal compliance.",
      // "ID copies are stored temporarily and destroyed afterwards.",
    ],
  },
  {
    title: "11. Room Occupancy",
    list: [
      "Max occupancy: 2 people per room.",
      "Extra bed: ₹1,000 (subject to room capacity).",
      "Couple Policy: Valid photo ID required, both must be 18+.",
      "Child Accommodation Policy: Children under the age of 7 are allowed to stay in the same room.For children aged 7 years and above, an extra bed will be required at an additional charge of ₹1,000 per night.",
    ],
  },
  {
    title: "12. Safety",
    list: [
      "CCTV surveillance in public areas for security.",
      "Guests must follow staff instructions during emergencies.",
      "Hotel not liable for lost/damaged items.",
      "Report security concerns to the front desk immediately.",
    ],
  },
  {
    title: "13. Medical Assistance",
    list: ["For medical emergencies, an on-call doctor is available (additional charges apply). Basic medications and a first aid kit are also available. Please contact the front desk for any assistance.",]
  },
  {
    title: "14. Force Majeure",
    list: [
      "Hotel not liable for natural disasters or events beyond control.",
      "Refunds are not guaranteed but rescheduling may be offered.",
    ],
  },
  {
    title: "15. Parking",
    list: [
      "Limited parking (8–10 cars) on first-come basis.",
      "The hotel provides limited parking space for 8 to 10 cars only which is based on first come, first served. Please note that tempo travellers and buses cannot be accommodated within the hotel premises.",
      "There is an adjacent parking area near the hotel where cars, tempo travellers and buses can be parked. Travellers are responsible for arranging and bearing the cost of parking in that area.",
      "If a guest temporarily removes their vehicle, the parking space may be reassigned to another guest. The hotel is not responsible for the availability of the original space."
    ],
  },
];

export default function PolicyPage() {
  return (
    <div className="container mx-auto my-12 px-4 py-8 max-w-3xl">
       <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 text-center">
              <span className="bg-gradient-to-r from-white via-[#267613] to-white bg-clip-text text-transparent">
               Guest Policy & Terms
              </span>
            </h2>

      <div className="space-y-10 text-gray-200 text-[15px] leading-relaxed">
        <p>
          Our hotel, officially named <strong>Hotel Spellmount </strong>, operates
          under the trade name <strong>Spellmount Resort</strong>. <br /> By booking
          or staying at Spellmount Resort, guests agree to these policies to ensure a
          safe and comfortable environment for all. These policies supersede any
          Online Travel Agency (OTA) rules.
        </p>

        {policySections.map((section, idx) => (
          <section key={idx} className="space-y-4">
            <div className="mb-2 flex items-center gap-3 justify-center">

            <h2 className="font-bold text-2xl bg-gradient-to-r from-pink-300 via-yellow-300 to-green-300 bg-clip-text text-transparent">
              {section.title}
            </h2>
            </div>

            {section.text && <p>{section.text}</p>}

            {section.items &&
              section.items.map((item, i) => (
                <div key={i} className="space-y-2">
                  {item.subtitle && (
                    <h3 className="text-base font-medium text-gray-200">
                      {item.subtitle}
                    </h3>
                  )}
                  {item.list && (
                    <ul className="list-decimal  pl-6 space-y-1">
                      {item.list.map((point, j) =>
                        Array.isArray(point) ? (
                          <ul
                            key={j}
                            className="list-decimal  pl-6 space-y-1 text-sm"
                          >
                            {point.map((sub, k) => (
                              <li key={k}>{sub}</li>
                            ))}
                          </ul>
                        ) : (
                          <li key={j}>{point}</li>
                        )
                      )}
                    </ul>
                  )}
                  {item.note && (
                    <p className="italic text-gray-200">{item.note}</p>
                  )}
                </div>
              ))}

            {section.list && (
              <ul className="list-disc pl-6 space-y-2">
                {section.list.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
