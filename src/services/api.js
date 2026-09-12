// Dummy backend data for testing multiple plots

export const getPlots = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: 1,
      state: "Delhi",
      city: "Delhi",
      area: "Bhajanpura",
      street: "Street-11",
      houseNo: "263",
      size: "30 gaj",
      latitude: 28.6985,
      longitude: 77.2748,
      polygon: [
        [28.69835, 77.27455],
        [28.69835, 77.27505],
        [28.69875, 77.27505],
        [28.69875, 77.27455],
      ],
    },

    {
      id: 2,
      state: "Delhi",
      city: "Delhi",
      area: "Bhajanpura",
      street: "Street-12",
      houseNo: "264",
      size: "40 gaj",
      latitude: 28.6992,
      longitude: 77.2755,
      polygon: [
        [28.6990, 77.2752],
        [28.6990, 77.2758],
        [28.6995, 77.2758],
        [28.6995, 77.2752],
      ],
    },

    {
      id: 3,
      state: "Delhi",
      city: "Delhi",
      area: "Yamuna Vihar",
      street: "Street-5",
      houseNo: "120",
      size: "50 gaj",
      latitude: 28.7002,
      longitude: 77.2770,
      polygon: [
        [28.6999, 77.2766],
        [28.6999, 77.2774],
        [28.7005, 77.2774],
        [28.7005, 77.2766],
      ],
    },

    {
      id: 4,
      state: "Delhi",
      city: "Delhi",
      area: "Mustafabad",
      street: "Street-2",
      houseNo: "45",
      size: "25 gaj",
      latitude: 28.7010,
      longitude: 77.2785,
      polygon: [
        [28.7008, 77.2782],
        [28.7008, 77.2788],
        [28.7012, 77.2788],
        [28.7012, 77.2782],
      ],
    },
  ];
};