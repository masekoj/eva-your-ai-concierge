export const hotelKnowledge = {
  name: "Sunbird Lilongwe",
  tagline: "Oasis in the City",
  location: {
    address: "Kamuzu Procession Road, P. O. Box 44, Lilongwe",
    city: "Lilongwe",
    country: "Malawi",
    description: "Lilongwe is the capital of Malawi, chosen because of its position in the very heart of the country. The city has two contrasting faces: the bustling Old Town, and the landscaped City Centre."
  },
  contact: {
    email: "lilongwehotelres@sunbirdmalawi.com",
    phone: ["+265 888 965 758", "+265 111 756 333"],
    bookingUrl: "https://book.travelbookgroup.com/premium/index.html?id_stile=19015&tst_prntz=si&headvar=ok&lingua_int=eng&id_albergo=24951&dc=7807"
  },
  policies: {
    checkIn: "2:00 PM",
    checkOut: "10:00 AM",
    cancellation: "Free cancellation up to 24 hours before arrival"
  },
  rooms: [
    {
      id: "deluxe",
      name: "Deluxe Room",
      description: "This double room has a tile/marble floor, and double bed",
      size: "20m²",
      guests: "2 adults + 1 child (under 1 year)",
      beds: "1 Full Double Bed",
      amenities: ["Air conditioning", "Private bathroom", "TV", "Tea/Coffee maker", "WiFi"],
      image: "https://www.sunbirdmalawi.com/assets/hotels/Lilongwe/deluxe-room/Lilongwe-deluxe-room-2.jpg",
      priceFrom: 150
    },
    {
      id: "studio",
      name: "Studio Room",
      description: "This double room features an electric kettle, soundproofing and tile/marble floor",
      size: "25m²",
      guests: "2 adults + 1 child (under 1 year)",
      beds: "2 Full Double Beds",
      amenities: ["Air conditioning", "Electric kettle", "Soundproofing", "Private bathroom", "TV", "WiFi"],
      image: "https://www.sunbirdmalawi.com/assets/hotels/Lilongwe/deluxe-studio-room/Lilongwe-deluxe-studio-room-3.jpg",
      priceFrom: 180
    },
    {
      id: "chalet",
      name: "Chalet Room",
      description: "This double room features soundproofing, seating area and sofa",
      size: "20m²",
      guests: "2 adults + 1 child (under 1 year)",
      beds: "1 Double Bed",
      amenities: ["Air conditioning", "Seating area", "Sofa", "Private bathroom", "TV", "WiFi"],
      image: "https://www.sunbirdmalawi.com/assets/hotels/Lilongwe/deluxe-chalet-room/Lilongwe-deluxe-chalet-room-2.jpg",
      priceFrom: 170
    }
  ],
  dining: [
    {
      id: "patio",
      name: "Patio Restaurant",
      description: "The patio restaurant has an a la carte menu and offers a wide range of local and international dishes.",
      type: "Restaurant",
      hours: {
        breakfast: "06:00 - 10:00",
        lunch: "12:00 - 14:00",
        dinner: "18:00 - 22:00"
      },
      image: "https://www.sunbirdmalawi.com/assets/hotels/Lilongwe/restuarant-bar/lilongwe-restuarant-2.jpg"
    },
    {
      id: "cocktail-bar",
      name: "Cocktail Bar",
      description: "Cocktail bar is a casual public bar with digital television and serves both local and international beverages.",
      type: "Bar",
      hours: {
        daily: "15:00 - 22:00"
      },
      image: "https://www.sunbirdmalawi.com/assets/hotels/Lilongwe/restuarant-bar/lilongwe-cocktail-bar-2.jpg"
    },
    {
      id: "lounge-265",
      name: "Lounge 265",
      description: "Sunbird has a private dining room that can accommodate up to 12 people.",
      type: "Private Dining",
      hours: {
        daily: "12:00 - 00:00"
      },
      capacity: 12,
      image: "https://www.sunbirdmalawi.com/assets/hotels/Lilongwe/restuarant-bar/lilongwe-patio-bar-2.jpg"
    }
  ],
  activities: [
    {
      id: "lake-malawi",
      name: "Lake Malawi",
      description: "An hour's drive south of Lilongwe, on the M1, is Dedza Mountain. In Dedza itself, the famed Dedza pottery creates and exports its wares worldwide.",
      image: "https://www.sunbirdmalawi.com/assets/hotels/Lilongwe/activities/lilongwe-activity-1.jpg"
    },
    {
      id: "game-ranch",
      name: "Game & Lakeside Trip",
      description: "Kuti Game ranch, just outside Salima, is also an hour's drive from Sunbird Lilongwe. It covers 3000 ha and is a haven for wildlife.",
      image: "https://www.sunbirdmalawi.com/assets/hotels/capital/activities/capital-activity-1.jpg"
    },
    {
      id: "city-tours",
      name: "City Tours",
      description: "Lilongwe, known as the Garden City, is developing at a tremendous speed and city tours include areas of interest such as New Parliament buildings.",
      image: "https://www.sunbirdmalawi.com/assets/hotels/Lilongwe/activities/lilongwe-activity-2.jpg"
    },
    {
      id: "dzalanyama",
      name: "Dzalanyama Forest",
      description: "Is undoubtedly one of Malawi's very best birding localities, with many exotic species just 58km from the capital.",
      image: "https://www.sunbirdmalawi.com/assets/hotels/Lilongwe/activities/lilongwe-activity-3.jpg"
    },
    {
      id: "nature-sanctuary",
      name: "The Lilongwe Nature Sanctuary",
      description: "Offers superb wildlife habitat for hyenas, golden weaver, mountain wagtail and many more.",
      image: "https://www.sunbirdmalawi.com/assets/hotels/Lilongwe/activities/lilongwe-activity-4.jpg"
    }
  ],
  amenities: [
    "Free WiFi",
    "Swimming Pool",
    "On-site Restaurant",
    "Bar & Lounge",
    "Conference Facilities",
    "Room Service",
    "Laundry Service",
    "24-hour Front Desk",
    "Parking",
    "Airport Shuttle"
  ],
  faqs: [
    {
      question: "What time is check-in and check-out?",
      answer: "Check-in is at 2:00 PM and check-out is at 10:00 AM. Early check-in and late check-out may be available upon request."
    },
    {
      question: "Is breakfast included?",
      answer: "Breakfast is available at the Patio Restaurant from 6:00 AM to 10:00 AM. Some room rates include breakfast - please check your booking details."
    },
    {
      question: "Do you have airport transfers?",
      answer: "Yes, we offer airport shuttle services. Please contact us in advance to arrange your transfer."
    },
    {
      question: "Is there WiFi available?",
      answer: "Yes, complimentary WiFi is available throughout the hotel for all guests."
    },
    {
      question: "Can you arrange tours and activities?",
      answer: "Absolutely! Our concierge can help arrange city tours, trips to Lake Malawi, game drives, and visits to the Lilongwe Nature Sanctuary."
    }
  ]
};

export type HotelKnowledge = typeof hotelKnowledge;
