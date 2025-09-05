const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/cmf27h1uu01lt01pg0m0mcupt',
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,
  showMarkers: false,
  theme: 'mongabay',
  intro: {
    title: 'The Arai River',
    subtitle:
      'This mountainous tributary, to be dammed and deforested, flows into the Pursat River which feeds into the Tonle Sap Lake.',
    date: 'Draft Sept. 05 2025',
    social: [
      {
        name: 'twitter',
        src: 'twitter.svg',
        href: 'https://x.com/Mongabay',
      },
      {
        name: 'facebook',
        src: 'facebook.svg',
        href: 'https://www.facebook.com/Mongabay/',
      },
    ],
  },
  logos: [
    {
      name: 'mongabay',
      src: 'mongabaylogo.png',
      width: '140',
      href: 'https://news.mongabay.com',
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
      title: 'The Cardamoms',
       images: [
        {
          src: 'Photo1.jpg',
          position: 'top',
          title: 'Dam construction',
          author: 'Pursat',
        },
      ],
      description:
        "Despite being one of the best-preserved forest landscapes still standing in Cambodia, the Cardamoms’ lush rainforests face increasing threats, largely in the form of hydropower projects.",
      location: {
        center: [104.5, 12.0],
        zoom: 4.5,
        pitch: 0.0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
      
      ],
      onChapterExit: [
           {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
      ],
    },
    
    {
      id: 'second-chapter',
      alignment: 'right',
      hidden: false,
      title: "Dams",
      description:
        "Dams have been built and are under construction within and around the Cardamom Mountains in Cambodia, with five hydropower dams already operational and others in various stages of development, including projects like the Dam 2 in Pursat province.",
      legend: [
        {
          title: 'Samkos REDD+ proyect area',
          color: '#006a54',
          pattern: 'LINEPATTERN-green',
        },
           {
          title: 'Protected Areas',
          color: '#006a54',
        },
      ],
      sources: "Placeholder text",
      location: {
        center: [103.75, 12.0],
        zoom: 8.25,
        pitch: 40.0,
        bearing: 25,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
      ],
      onChapterExit: [
           {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
      ],
    },
    
    {
      id: 'third-chapter',
      alignment: 'right',
      hidden: false,
      title: 'Overlaps',
      description:
          'The hydroelectric project`s area which lies within the Rokat commune, overlaps with the Samkos REDD+ project area.',
      legend: [
        {
          title: 'Irrigation Dam 2 project area',
          color: '#de6363',
        },
        {
          title: 'Rokat commune',
          color: '#055546',
        },
      ],
      location: {
        center: [103.75, 12.0],
        zoom: 10.25,
        pitch: 40.0,
        bearing: 25,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
      ],
      onChapterExit: [
           {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
      ],
    },
    
    {
      id: 'fourth-chapter',
      alignment: 'right',
      hidden: false,
      title: 'Satellite imagery',
      description:
        'A roughly 10-kilometer (6-mile) road being carved through the forest to the dam site appeared between February and March 2025, followed by some 60 hectares of forest clearance taking place within the project area through at least Aug. 12.',
      legend: [
      ],
      sources: 'Copernicus',
      location: {
        center: [103.709, 12.162],
        zoom: 12.5,
        pitch: 0,
        bearing: 25,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'Satelitte_August_12_2025',
          opacity: 1,
        },
        {
          layer: 'redd-cambodia',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'Satelitte_August_12_2025',
          opacity: 0.25,
        },
      ],
    },
    
    {
      id: 'fifth-chapter',
      alignment: 'right',
      hidden: false,
      title: 'Restricted water flow',
      description:
        'The dam is being built on the Arai River, the largest natural source of water for upwards of 40 families in Rokat commune who use it for everything from cooking, bathing and drinking to irrigating crops and sustaining livestock. It is also a key tributary of the Pursat River, which in turn empties into the Tonle Sap.',
      location: {
        center: [103.9, 12.15],
        zoom: 9.25,
        pitch: 0,
        bearing: 25,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
      ],
      onChapterExit: [
             {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
      ],
    },
    
    {
      id: 'sixth-chapter',
      alignment: 'left',
      hidden: false,
      title: 'Tonle Sap',
      images: [
        {
          src: 'Photo1.jpg',
          position: 'top',
          title: 'Placeholder text',
          author: 'Placeholder text',
        },
      ],
      description:
        "The proliferation of irrigation dams and other barriers across the river’s catchment area has restricted the access of fish to and from the Tonle Sap Lake, Southeast Asia’s largest freshwater lake. Irrigation Dam 2 looks set to exacerbate these conditions, restricting the river flows and cutting off riverine communities.",
      location: {
        center: [103.9, 12.5],
        zoom: 8.25,
        pitch: 0,
        bearing: 25,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
      ],
      onChapterExit: [
             {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
      ],
    },
    
  ],
};
