const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/cmdyt9fxl005a01qzb0d4das5',
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,
  showMarkers: false,
  theme: 'mongabay',
  intro: {
    title: 'M-Sand',
    subtitle:
      'When one ban triggers another crisis: how Kerala’s river sand mining ban is leading to more quarrying in the Western Ghats.',
    date: 'Sept. 05 2025',
    social: [
      {
        name: 'twitter',
        src: 'twitter.svg',
        href: 'https://x.com/MongabayIndia',
      },
      {
        name: 'facebook',
        src: 'facebook.svg',
        href: 'https://www.facebook.com/MongabayIndia/',
      },
    ],
  },
  logos: [
    {
      name: 'mongabay',
      src: 'mongabaylogo.png',
      width: '140',
      href: 'https://india.mongabay.com',
    },
    {
      name: 'vizzuality',
      src: 'vizzualitylogo.png',
      width: '100',
      href: 'https://vizzuality.com',
    },
  ],
  alignment: 'left',
  footer: 'Cartography by Andrés Alegría for Mongabay.',
  chapters: [
    {
      id: 'first chapter',
      alignment: 'left',
      hidden: false,
      title: 'Placeholder text',
      description:
        'Placeholder text.',
      legend: [
        {
          title: 'Placeholder text',
          icon: 'plane',
        },
      ],
      sources:
        "Placeholder text.",
      location: {
        center: [77.20, 10.75],
        zoom: 6.5,
        pitch: 30.0,
        bearing: 60,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'peruvian-amazon-20241002t1750-dlalbv copy',
          opacity: 0.5,
        },
        {
          layer: 'airstrips-10224-dozgmq',
          opacity: 1,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
          opacity: 0,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 1',
          opacity: 0,
        },
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'peruvian-amazon-20241002t1750-dlalbv copy',
          opacity: 0,
        },
      ],
    },
    {
      id: 'second-chapter',
      alignment: 'right',
      hidden: false,
      title: 'Placeholder text',
      images: [
        {
          src: 'Photo1.jpg',
          position: 'top',
          title: 'Placeholder text',
          author: 'Placeholder text',
        },
      ],
      description:
        'Placeholder text.',
      legend: [
        {
          title: 'Placeholder text',
          icon: 'coca',
        },
      ],
      sources: "Placeholder text",
      location: {
        center: [77.20, 10.75],
        zoom: 6.5,
        pitch: 40.0,
        bearing: 60,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 1,
        },
        {
          layer: 'airstrips-10224-dozgmq',
          opacity: 1,
        },
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0,
        },
      ],
    },
    {
      id: 'third-chapter',
      alignment: 'fully',
      hidden: false,
      title: 'Placeholder text',
      description:
          'Placeholder text.',
      legend: [
        {
          title: 'Placeholder text',
          color: '#de6363',
          pattern: 'LINEPATTERN',
        },
      ],
      sources: 'Placeholder text',
      location: {
        center: [77.20, 10.75],
        zoom: 6.5,
        pitch: 20.0,
        bearing: 60,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 1,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
          opacity: 0,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 1',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 0.75,
        },
      ],
    },
    {
      id: 'fourth-chapter',
      alignment: 'fully',
      hidden: false,
      title: 'Placeholder text',
      images: [
        {
          src: 'Photo1.jpg',
          position: 'top',
          title: 'Placeholder text',
          author: 'Placeholder text',
        },
      ],
      description:
        'Placeholder text.',
      legend: [
        {
          title: 'Placeholder text',
          color: '#ccefb8',
        },
      ],
      sources: 'Placeholder text',
      location: {
        center: [77.20, 10.75],
        zoom: 7.5,
        pitch: 30.0,
        bearing: 60,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'deforestationthreeregions-dcthbg',
          opacity: 1,
        },
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0.5,
        },
      ],
      onChapterExit: [],
    },
    {
      id: 'fifth-chapter',
      alignment: 'fully',
      hidden: false,
      title: 'Placeholder text',
      description:
        'Placeholder text.',
      location: {
        center: [77.20, 10.75],
        zoom: 6.5,
        pitch: 60.0,
        bearing: 50,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'deforestationthreeregions-dcthbg',
          opacity: 1,
        },
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: .5,
        },
      ],
      onChapterExit: [
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0,
        },
      ],
    },
    {
      id: 'sixth-chapter',
      alignment: 'left',
      hidden: false,
      title: 'Placeholder text',
      images: [
        {
          src: 'Photo1.jpg',
          position: 'top',
          title: 'Placeholder text',
          author: 'Placeholder text',
        },
      ],
      description:
        'Placeholder text.',
      location: {
        center: [77.20, 10.75],
        zoom: 6.5,
        pitch: 30.0,
        bearing: 50,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'deforestationthreeregions-dcthbg',
          opacity: 1,
        },
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 1,
        },
      ],
      onChapterExit: [],
    },
    {
      id: 'seventh-chapter',
      alignment: 'right',
      hidden: false,
      title: 'Placeholder text',
      images: [
        {
          src: 'Photo1.jpg',
          position: 'top',
          title: 'APlaceholder text',
          author: 'Placeholder text',
        },
      ],
      description:
        'Placeholder text.',
      location: {
        center: [77.20, 10.75],
        zoom: 4.5,
        pitch: 30.0,
        bearing: 60,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'deforestationthreeregions-dcthbg',
          opacity: 1,
        },
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 1,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
          opacity: 0,
        }
      ],
      onChapterExit: [
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 0,
        },
      ],
    },
    {
      id: 'eighth-chapter',
      alignment: 'fully',
      hidden: false,
      title: 'Placeholder text',
      images: [
        {
          src: 'Photo1.jpg',
          position: 'top',
          title: 'Placeholder text',
          author: 'Placeholder text',
        },
      ],
      description:
        'Placeholder text.',
      legend: [
        {
          title: 'Placeholder text',
          color: '#66f7ff',
        },
      ],
      sources: "Placeholder text",
      location: {
        center: [77.20, 10.75],
        zoom: 4.5,
        pitch: 60.0,
        bearing: 30,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'deforestationthreeregions-dcthbg',
          opacity: 0,
        },
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
          opacity: 0.75,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 1',
          opacity: 0.75,
        },
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: 'ninth-chapter',
      alignment: 'right',
      hidden: false,
      title: 'Placeholder text',
      images: [
        {
          src: 'Photo1.jpg',
          position: 'top',
          title: 'Placeholder text',
          author: 'Placeholder text',
        },
      ],
      description:
        'Placeholder text.',
      location: {
        center: [77.20, 10.75],
        zoom: 5.5,
        pitch: 20.0,
        bearing: 40,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'deforestationthreeregions-dcthbg',
          opacity: 0,
        },
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0.75,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
          opacity: 0.75,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 1',
          opacity: 0.75,
        },
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: 'tenth-identifier',
      alignment: 'fully',
      hidden: false,
      title: 'Rivers and roads',
      images: [
        {
          src: 'Photo1.jpg',
          position: 'top',
          title: 'Placeholder text',
          author: 'Placeholder text',
        },
      ],
      description:
        'Placeholder text.',
      location: {
        center: [77.20, 10.15],
        zoom: 6.5,
        pitch: 20.0,
        bearing: 30,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 1,
        },
        {
          layer: 'airstrips-10224-dozgmq',
          opacity: 1,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
          opacity: 0.75,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 1',
          opacity: 0.75,
        },
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0,
        },
      ],
    },
  ],
};
