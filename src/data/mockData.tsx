// mockData.ts

export type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  priceUnit: string;
  size: string;
  description: string;
  imageUrl: string;
  gallery: string[];
  videoId: string;
  featured: boolean;
};

export const mockProperties: Property[] = [
  {
    id: "prop1",
    title: "Lucknow Kursi Road Plot",
    location:
      "150m from Kursi Road, 5 km from Tedhi Puliya, 50m from Scorpio Club, Kursi Road, Lucknow",
    price: 2551,
    priceUnit: "sq. ft.",
    size: "--",
    description:
      "30 ft wide main road, with 24 ft & 22 ft branch roads, Electricity & street lights, Green area & gated society, Proper drainage & shaded trees, Close to Night Safari & Zoo, Connected to the main Scorpio Club road",
    imageUrl: "/dist/assets/ScorpioClub1.jpg",
    gallery: [
      "../../dist/assets/ScorpioClub1.jpg",
      "../../dist/assets/ScorpioClub2.png",
      "../../dist/assets/ScorpioClub3.png",
    ],
    videoId: "jkXlA5fi__o?si=EzOuxF5a6MPzRzhL",
    featured: true,
  },
  {
    id: "prop2",
    title: "Sitapur Road Plot",
    location:
      "1 km from Bakshi Ka Talab Tehsil, 1 km from Outer Ring Road, Located behind Adhya Lawn, Sitapur Road, Lucknow",
    price: 1099,
    priceUnit: "sq ft",
    size: "--",
    description:
      "30-feet wide main road, with 24 and 22-feet wide branch roads, Electricity and street lights, Green area, gated society, proper drainage system, and shady trees, Only 500 meters from Ram Sagar Mishra Government Hospital, Just 600 meters from RR College",
    imageUrl: "dist/assets/Sitapur1.jpg",
    gallery: [
      "../../dist/assets/Sitapur1.jpg",
      "../../dist/assets/sitapur2.jpg",
      "../../dist/assets/sitapur3.jpg",
    ],
    videoId: "aLdXxVvPzVM?si=Ccvt_e3h7Duh4w4y",
    featured: true,
  },
  {
    id: "prop3",
    title: "Chandrika Devi Road Plot",
    location: "Chandrika Devi Road, Bakshi Ka Talab, Lucknow",
    price: 1299,
    priceUnit: "sq ft",
    size: "--",
    description:
      "Strategic Location, Close to Outer Ring Road, only 1 km away, Ready-to-Move Plots, Peaceful Environment",
    imageUrl: "dist/assets/ChandrikaDevi1.png",
    gallery: [
      "../../dist/assets/ChandrikaDevi1.png",
      "../../dist/assets/ChandrikaDevi2.png",
      "../../dist/assets/ChandrikaDevi3.png",
    ],
    videoId: "wwuCSnGYTB8?si=XS4ZKuVYzYPXz67b",
    featured: true,
  },
  {
    id: "prop4",
    title: "Jankipuram Plot",
    location: "Shukla Chauraha, Jankipuram Vistar, Lucknow",
    price: 2600,
    priceUnit: "sq ft",
    size: "--",
    description:
      "Prime Location: Situated just 300 meters from Shukla Chauraha in Jankipuram Extension, Secured and well-managed residential environment, Good Connectivity",
    imageUrl: "/dist/assets/Jankipuram1.png",
    gallery: [
      "../../dist/assets/Jankipuram1.png",
      "../../dist/assets/Jankipuram2.png",
      "../../dist/assets/Jankipuram3.png",
    ],
    videoId: "ivtDXf5UdIQ?si=kkJ8GV0WKXiFobe6",
    featured: true,
  },
];

export type Location = {
  title: string;
  latitude: number;
  longitude: number;
  address: string;
};

export const propertyLocations: { office: Location } = {
  office: {
    title: "Shree Shyam Group Office",
    latitude: 26.8467,
    longitude: 80.9462,
    address: "Engineering Chauraha, Lucknow, Uttar Pradesh, India",
  },
};
