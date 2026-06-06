const pingtan = [
  {
    values: [
      {
        nodes: [
          { nodeName: "A" },
          { nodeName: "B" },
          { nodeName: "C" },
          { nodeName: "D" },
          { nodeName: "E" },
          { nodeName: "F" },
          { nodeName: "G" },
        ],
        links: [
          { source: "A", target: "D", value: 400 },
          { source: "B", target: "D", value: 400 },
          { source: "C", target: "D", value: 500 },
          { source: "D", target: "F", value: 800 },
          { source: "C", target: "E", value: 100 },
          { source: "E", target: "G", value: 100 },
          { source: "D", target: "G", value: 500 },
        ],
      },
    ],
  },
];

const qiantao = [
  {
    name: "data",
    values: [
      {
        nodes: [
          {
            value: 100,
            name: "A",
            children: [
              {
                name: "top",
                value: 40,
                children: [
                  { name: "00", value: 15 },
                  { name: "01", value: 10 },
                  { name: "02", value: 10 },
                ],
              },
              {
                name: "middle",
                value: 30,
                children: [
                  { name: "00", value: 10 },
                  { name: "01", value: 10 },
                  { name: "02", value: 10 },
                ],
              },
              {
                name: "bottom",
                value: 30,
              },
            ],
          },
          {
            value: 80,
            name: "B",
            children: [
              {
                name: "top",
                value: 40,
                children: [
                  { name: "00", value: 100 },
                  { name: "01", value: 40 },
                ],
              },
              {
                name: "middle",
                value: 10,
              },
              {
                name: "bottom",
                value: 30,
              },
            ],
          },
          {
            value: 50,
            name: "C",
            children: [
              {
                name: "top",
                value: 20,
              },
              {
                name: "middle",
                value: 20,
              },
              {
                name: "bottom",
                value: 10,
              },
            ],
          },
        ],
      },
    ],
  },
];

const data3 = [
  {
    values: [
      {
        nodes: [
          { nodeName: "Agricultural 'waste'" },
          { nodeName: "Bio-conversion" },
          { nodeName: "Liquid" },
          { nodeName: "Losses" },
          { nodeName: "Solid" },
          { nodeName: "Gas" },
          { nodeName: "Biofuel imports" },
          { nodeName: "Biomass imports" },
          { nodeName: "Coal imports" },
          { nodeName: "Coal" },
          { nodeName: "Coal reserves" },
          { nodeName: "District heating" },
          { nodeName: "Industry" },
          { nodeName: "Heating and cooling - commercial" },
          { nodeName: "Heating and cooling - homes" },
          { nodeName: "Electricity grid" },
          { nodeName: "Over generation / exports" },
          { nodeName: "H2 conversion" },
          { nodeName: "Road transport" },
          { nodeName: "Agriculture" },
          { nodeName: "Rail transport" },
          { nodeName: "Lighting & appliances - commercial" },
          { nodeName: "Lighting & appliances - homes" },
          { nodeName: "Gas imports" },
          { nodeName: "Ngas" },
          { nodeName: "Gas reserves" },
          { nodeName: "Thermal generation" },
          { nodeName: "Geothermal" },
          { nodeName: "H2" },
          { nodeName: "Hydro" },
          { nodeName: "International shipping" },
          { nodeName: "Domestic aviation" },
          { nodeName: "International aviation" },
          { nodeName: "National navigation" },
          { nodeName: "Marine algae" },
          { nodeName: "Nuclear" },
          { nodeName: "Oil imports" },
          { nodeName: "Oil" },
          { nodeName: "Oil reserves" },
          { nodeName: "Other waste" },
          { nodeName: "Pumped heat" },
          { nodeName: "Solar PV" },
          { nodeName: "Solar Thermal" },
          { nodeName: "Solar" },
          { nodeName: "Tidal" },
          { nodeName: "UK land based bioenergy" },
          { nodeName: "Wave" },
          { nodeName: "Wind" },
        ],
        links: [
          { source: 0, target: 1, value: 124.729 },
          { source: 1, target: 2, value: 0.597 },
          { source: 1, target: 3, value: 26.862 },
          { source: 1, target: 4, value: 280.322 },
          { source: 1, target: 5, value: 81.144 },
          { source: 6, target: 2, value: 35 },
          { source: 7, target: 4, value: 35 },
          { source: 8, target: 9, value: 11.606 },
          { source: 10, target: 9, value: 63.965 },
          { source: 9, target: 4, value: 75.571 },
          { source: 11, target: 12, value: 10.639 },
          { source: 11, target: 13, value: 22.505 },
          { source: 11, target: 14, value: 46.184 },
          { source: 15, target: 16, value: 104.453 },
          { source: 15, target: 14, value: 113.726 },
          { source: 15, target: 17, value: 27.14 },
          { source: 15, target: 12, value: 342.165 },
          { source: 15, target: 18, value: 37.797 },
          { source: 15, target: 19, value: 4.412 },
          { source: 15, target: 13, value: 40.858 },
          { source: 15, target: 3, value: 56.691 },
          { source: 15, target: 20, value: 7.863 },
          { source: 15, target: 21, value: 90.008 },
          { source: 15, target: 22, value: 93.494 },
          { source: 23, target: 24, value: 40.719 },
          { source: 25, target: 24, value: 82.233 },
          { source: 5, target: 13, value: 0.129 },
          { source: 5, target: 3, value: 1.401 },
          { source: 5, target: 26, value: 151.891 },
          { source: 5, target: 19, value: 2.096 },
          { source: 5, target: 12, value: 48.58 },
          { source: 27, target: 15, value: 7.013 },
          { source: 17, target: 28, value: 20.897 },
          { source: 17, target: 3, value: 6.242 },
          { source: 28, target: 18, value: 20.897 },
          { source: 29, target: 15, value: 6.995 },
          { source: 2, target: 12, value: 121.066 },
          { source: 2, target: 30, value: 128.69 },
          { source: 2, target: 18, value: 135.835 },
          { source: 2, target: 31, value: 14.458 },
          { source: 2, target: 32, value: 206.267 },
          { source: 2, target: 19, value: 3.64 },
          { source: 2, target: 33, value: 33.218 },
          { source: 2, target: 20, value: 4.413 },
          { source: 34, target: 1, value: 4.375 },
          { source: 24, target: 5, value: 122.952 },
          { source: 35, target: 26, value: 839.978 },
          { source: 36, target: 37, value: 504.287 },
          { source: 38, target: 37, value: 107.703 },
          { source: 37, target: 2, value: 611.99 },
          { source: 39, target: 4, value: 56.587 },
          { source: 39, target: 1, value: 77.81 },
          { source: 40, target: 14, value: 193.026 },
          { source: 40, target: 13, value: 70.672 },
          { source: 41, target: 15, value: 59.901 },
          { source: 42, target: 14, value: 19.263 },
          { source: 43, target: 42, value: 19.263 },
          { source: 43, target: 41, value: 59.901 },
          { source: 4, target: 19, value: 0.882 },
          { source: 4, target: 26, value: 400.12 },
          { source: 4, target: 12, value: 46.477 },
          { source: 26, target: 15, value: 525.531 },
          { source: 26, target: 3, value: 787.129 },
          { source: 26, target: 11, value: 79.329 },
          { source: 44, target: 15, value: 9.452 },
          { source: 45, target: 1, value: 182.01 },
          { source: 46, target: 15, value: 19.013 },
          { source: 47, target: 15, value: 289.366 },
        ],
      },
    ],
  },
];


const jiaohu = [
    {
      values: [
        {
          nodes: [
            {
              name: 'Berlin'
            },
            {
              name: 'Job Applications'
            },
            {
              name: 'Barcelona'
            },
            {
              name: 'Madrid'
            },
            {
              name: 'Amsterdam'
            },
            {
              name: 'Paris'
            },
            {
              name: 'London'
            },
            {
              name: 'Munich'
            },
            {
              name: 'Brussels'
            },
            {
              name: 'Dubai'
            },
            {
              name: 'Dublin'
            },
            {
              name: 'Other Cities'
            },
            {
              name: 'No Response'
            },
            {
              name: 'Responded'
            },
            {
              name: 'Rejected'
            },
            {
              name: 'Interviewed'
            },
            {
              name: 'No Offer'
            },
            {
              name: 'Declined Offer'
            },
            {
              name: 'Accepted Offer'
            }
          ],
          links: [
            {
              source: 'Berlin',
              target: 'Job Applications',
              value: 102,
              color: '#dddddd'
            },
            {
              source: 'Barcelona',
              target: 'Job Applications',
              value: 39,
              color: '#dddddd'
            },
            {
              source: 'Madrid',
              target: 'Job Applications',
              value: 35,
              color: '#dddddd'
            },
            {
              source: 'Amsterdam',
              target: 'Job Applications',
              value: 15,
              color: '#dddddd'
            },
            {
              source: 'Paris',
              target: 'Job Applications',
              value: 14,
              color: '#dddddd'
            },
            {
              source: 'London',
              target: 'Job Applications',
              value: 6,
              color: '#dddddd'
            },
            {
              source: 'Munich',
              target: 'Job Applications',
              value: 5,
              color: '#dddddd'
            },
            {
              source: 'Brussels',
              target: 'Job Applications',
              value: 4,
              color: '#dddddd'
            },
            {
              source: 'Dubai',
              target: 'Job Applications',
              value: 3,
              color: '#dddddd'
            },
            {
              source: 'Dublin',
              target: 'Job Applications',
              value: 3,
              color: '#dddddd'
            },
            {
              source: 'Other Cities',
              target: 'Job Applications',
              value: 12,
              color: '#dddddd'
            },
            {
              source: 'Job Applications',
              target: 'No Response',
              value: 189,
              color: '#dddddd'
            },
            {
              source: 'Job Applications',
              target: 'Responded',
              value: 49,
              color: 'orange'
            },
            {
              source: 'Responded',
              target: 'Rejected',
              value: 38,
              color: '#dddddd'
            },
            {
              source: 'Responded',
              target: 'Interviewed',
              value: 11,
              color: 'orange'
            },
            {
              source: 'Interviewed',
              target: 'No Offer',
              value: 8,
              color: '#dddddd'
            },
            {
              source: 'Interviewed',
              target: 'Declined Offer',
              value: 2,
              color: '#dddddd'
            },
            {
              source: 'Interviewed',
              target: 'Accepted Offer',
              value: 1,
              color: 'orange'
            }
          ]
        }
      ]
    }
  ]