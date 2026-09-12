const plotData = [
  {
    id: 1,

    // Location
    latitude: 28.6995,
    longitude: 77.2765,

    // Basic information
    ownerName: "Rahul Kumar",
    fatherName: "Ramesh Kumar",
    area: "2500 sq.ft",
    street: "Main Road",
    houseNo: "A-102",
    size: "50 x 50 ft",

    // Land information
    khasraNo: "K-102",
    village: "Seelampur",
    district: "North East Delhi",
    state: "Delhi",

    // Contact
    mobile: "9876543210",

    // Acquisition information
    acquisitionStatus: "Under Process",
    compensation: "₹15,00,000",
    projectName: "Delhi Highway Project",

    // Polygon boundary
    polygon: [
      [28.6998, 77.2762],
      [28.7000, 77.2770],
      [28.6992, 77.2773],
      [28.6989, 77.2765],
    ],
  },

  {
    id: 2,

    latitude: 28.7015,
    longitude: 77.2790,

    ownerName: "Amit Sharma",
    fatherName: "Suresh Sharma",
    area: "3000 sq.ft",
    street: "Station Road",
    houseNo: "B-204",
    size: "60 x 50 ft",

    khasraNo: "K-205",
    village: "Shahdara",
    district: "North East Delhi",
    state: "Delhi",

    mobile: "9876543211",

    acquisitionStatus: "Approved",
    compensation: "₹20,00,000",
    projectName: "Metro Expansion Project",

    polygon: [
      [28.7018, 77.2787],
      [28.7020, 77.2794],
      [28.7012, 77.2797],
      [28.7010, 77.2790],
    ],
  },
];

export default plotData;